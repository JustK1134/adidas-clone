from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL
# Create your models here.

class Shop(models.Model):
    user = models.ForeignKey(User, default=1, null=True, on_delete=models.SET_NULL)
    productname = models.CharField(max_length=200, default= None)
    division = models.CharField(max_length=200, default= None)
    sport = models.CharField(max_length=200, default= None)
    product_type = models.CharField(max_length=200, default= None)
    color = models.CharField(max_length=200, default= None)
    price = models.IntegerField(default= 1)
    main_image = models.CharField(max_length=200, default= None)
    second_image = models.CharField(max_length=200, default= None)
    small_image_1 = models.CharField(max_length=200, default= None)
    big_image_1 = models.CharField(max_length=200, default= None)
    big_image_2 = models.CharField(max_length=200, default= None)
    big_image_3 = models.CharField(max_length=200, default= None)
    big_image_4 = models.CharField(max_length=200, default= None)
    big_image_5 = models.CharField(max_length=200, default= None)
    big_image_6 = models.CharField(max_length=200, default= None)
    big_image_7 = models.CharField(max_length=200, default= None)
    big_image_8 = models.CharField(max_length=200, default= None)
    size_5UK = models.IntegerField(default=0)
    size_6UK = models.IntegerField(default=0)
    size_7UK = models.IntegerField(default=0)
    size_8UK = models.IntegerField(default=0)
    size_9UK = models.IntegerField(default=0)
    size_10UK = models.IntegerField(default=0)
    size_11UK = models.IntegerField(default=0)
    size_12UK = models.IntegerField(default=0)
    size_XS = models.IntegerField(default=0)
    size_S = models.IntegerField(default=0)
    size_M = models.IntegerField(default=0)
    size_L = models.IntegerField(default=0)
    size_XL = models.IntegerField(default=0)
    size_2XL = models.IntegerField(default=0)
    sizesock_KXL = models.IntegerField(default=0)
    sizesock_KXXL = models.IntegerField(default=0)
    sizesock_XS = models.IntegerField(default=0)
    sizesock_S = models.IntegerField(default=0)
    sizesock_M = models.IntegerField(default=0)
    sizesock_L = models.IntegerField(default=0)
    sizesock_XL = models.IntegerField(default=0)

class ShopInfo(models.Model):
    user = models.ForeignKey(User, default=1, null=True, on_delete=models.SET_NULL)
    productname = models.CharField(max_length=200, default= None)
        
    info_hightlight_text_1 = models.CharField(max_length=300, default= None)
    info_hightlight_text_2 = models.CharField(max_length=300, default= None)
    info_hightlight_text_3 = models.CharField(max_length=300, default= None)


    info_hightlight_title_1 = models.CharField(max_length=300, default= None)
    info_hightlight_title_2 = models.CharField(max_length=300, default= None)
    info_hightlight_title_3 = models.CharField(max_length=300, default= None)


    info_hightlight_img_1 = models.CharField(max_length=300, default= None)
    info_hightlight_img_2 = models.CharField(max_length=300, default= None)
    info_hightlight_img_3 = models.CharField(max_length=300, default= None)

    info_description_text_1 = models.CharField(max_length=500, default= None)
    info_description_title_1 = models.CharField(max_length=300, default= None)
    info_description_img_1 = models.CharField(max_length=300, default= None)

    info_detail_1 = models.CharField(max_length=300, default= None)
    info_detail_2 = models.CharField(max_length=300, default= None)
    info_detail_3 = models.CharField(max_length=300, default= None)
    info_detail_4 = models.CharField(max_length=300, default= None)
    info_detail_5 = models.CharField(max_length=300, default= None)
    info_detail_6 = models.CharField(max_length=300, default= None)
    info_detail_7 = models.CharField(max_length=300, default= None)
    info_detail_8 = models.CharField(max_length=300, default= None)
    info_detail_9 = models.CharField(max_length=300, default= None)
    info_detail_10 = models.CharField(max_length=300, default= None)
    info_detail_11 = models.CharField(max_length=300, default= None)
    info_detail_12 = models.CharField(max_length=300, default= None)

    info_faq_question_1 = models.CharField(max_length=300, default= None)
    info_faq_question_2 = models.CharField(max_length=300, default= None)
    info_faq_question_3 = models.CharField(max_length=300, default= None)
    info_faq_question_4 = models.CharField(max_length=300, default= None)
    info_faq_question_5 = models.CharField(max_length=300, default= None)

    info_faq_answer_1 = models.CharField(max_length=300, default= None)
    info_faq_answer_2 = models.CharField(max_length=300, default= None)
    info_faq_answer_3 = models.CharField(max_length=300, default= None)
    info_faq_answer_4 = models.CharField(max_length=300, default= None)
    info_faq_answer_5 = models.CharField(max_length=300, default= None)

class CategoryInfo(models.Model):
    division = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=300)



    

