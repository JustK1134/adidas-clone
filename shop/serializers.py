from .models import Shop, ShopInfo
from rest_framework import serializers

class ShopSerializer(serializers.ModelSerializer):
    sublink = serializers.SerializerMethodField('get_sublink')
    mainlink = serializers.SerializerMethodField('get_mainlink')
    product_image_initial = serializers.SerializerMethodField('get_product_image_initial')
    product_image_hidden = serializers.SerializerMethodField('get_product_image_hidden')
    product_info_highlight = serializers.SerializerMethodField('get_product_info_highlight')
    product_info_description = serializers.SerializerMethodField('get_product_info_description')
    product_info_detail = serializers.SerializerMethodField('get_product_info_detail')
    product_info_faq = serializers.SerializerMethodField('get_product_info_faq')
    size = serializers.SerializerMethodField('get_size')
    search_key = serializers.SerializerMethodField('get_search_key')


    def get_mainlink(self,obj):
        return f"http://127.0.0.1:8000/#/shop/product/{obj.id}"


    
    def get_sublink(self,obj):
        new_sublink_array = []
        queryset = Shop.objects.filter(productname = obj.productname).values()
        for x in list(queryset):
            new_sublink_array.append({'small_link':f"http://127.0.0.1:8000/#/shop/product/{x['id']}",'small_img':x['small_image_1'], 'big_img':x['main_image']})
        return new_sublink_array
    
    def get_product_image_initial(self,obj):
        new_product_image_array = []
        query = list(Shop.objects.filter(id=obj.id).values())[0]

        key_list = list(query.keys())
        filter_key_list = [k for k in key_list if 'big_image' in k]
        for x in range(0,4,1):
            new_product_image_array.append(query[filter_key_list[x]])
        return new_product_image_array

    def get_product_image_hidden(self,obj):
        new_product_image_array = []
        query = list(Shop.objects.filter(id=obj.id).values())[0]

        key_list = list(query.keys())
        filter_key_list = [k for k in key_list if 'big_image' in k]
        for x in range(4,8,1):
            new_product_image_array.append(query[filter_key_list[x]])
        return new_product_image_array
    

    def get_product_info_highlight(self,obj):
        new_product_info_highlight_array = []
        text_array =[]
        title_array =[]
        img_array =[]

        query = list(ShopInfo.objects.filter(productname = obj.productname).values())[0]
        key_list = list(query.keys())

        filter_key_list_text = [k for k in key_list if 'info_hightlight_text' in k]
        for x in filter_key_list_text:
            text_array.append(query[x])


        filter_key_list_title = [k for k in key_list if 'info_hightlight_title' in k]
        for x in filter_key_list_title:
            title_array.append(query[x])


        filter_key_list_img = [k for k in key_list if 'info_hightlight_img' in k]
        for x in filter_key_list_img:
            img_array.append(query[x])
        
        for x in range (0,3,1):
            new_product_info_highlight_array.append({"title":title_array[x],"content":text_array[x],"image":img_array[x]})

        return new_product_info_highlight_array
    
    def get_product_info_description(self, obj):
        new_product_info_description_array = []
        query = list(ShopInfo.objects.filter(productname = obj.productname).values())[0]
        new_product_info_description_array.append({"content":query["info_description_text_1"],"title":query["info_description_title_1"],"image":query["info_description_img_1"]})
        return new_product_info_description_array
    
    def get_product_info_detail(self, obj):
        new_product_info_detail_array = []
        query = list(ShopInfo.objects.filter(productname = obj.productname).values())[0]

        key_list = list(query.keys())
        filter_key_list_detail = [k for k in key_list if "info_detail" in k]
        for x in filter_key_list_detail:
            new_product_info_detail_array.append(query[x])
        return new_product_info_detail_array
    
    def get_product_info_faq(self, obj):
        new_product_info_faq_array = []
        question_array = []
        answer_array = []
        index_array =[]
        query = list(ShopInfo.objects.filter(productname = obj.productname).values())[0]
        key_list = list(query.keys())
        filter_key_list_question = [k for k in key_list if "info_faq_question" in k]
        filter_key_list_answer = [k for k in key_list if "info_faq_answer" in k]
        for x in filter_key_list_question:
            question_array.append(query[x])
        for index, x in enumerate(filter_key_list_answer):
            answer_array.append(query[x])
            index_array.append(index)

        for x in range (0,5,1):
            new_product_info_faq_array.append({"question":question_array[x],"answer":answer_array[x],"no":index_array[x]})
        return new_product_info_faq_array
    
    def get_size(self, obj):
        new_size_array = []
        query = list(Shop.objects.filter(productname = obj.productname).values())[0]
        key_list = list(query.keys())
        filter_key_list_size = [k for k in key_list if "size" in k]
        for x in filter_key_list_size:
            new_size_array.append({"size":x, "quantity":query[x]})
        return new_size_array


    def get_search_key(self, obj):
        new_search_key_array = obj.productname + " "+ obj.division + " "+ obj.sport + " "+ obj.product_type + " "+ obj.color
        new_search_key = new_search_key_array.lower().split()
        return new_search_key
    

    
    class Meta:
        model = Shop
        fields = ['id','productname','division','sport','product_type','color','price','main_image','second_image','small_image_1',
                  'mainlink','sublink','product_image_initial', 'product_image_hidden','product_info_highlight','product_info_description',
                        'product_info_detail',
                        'size',
                        'product_info_faq','search_key']




            
