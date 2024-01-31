from django.db import models

class Book(models.Model): #Db table definition
    title=models.CharField(max_length=20)
    author=models.CharField(max_length=20)
    price=models.IntegerField()
    def __str__(self):
        return self.title
