from books.models import Book
from rest_framework.decorators import api_view
from books.serializers import bookserializer,userserializer
from rest_framework.response import Response
from rest_framework import status
#
# @api_view(['GET','POST'])
# def booklist(request):
#     if(request.method=='GET'):
#         books=Book.objects.all()
#         b=bookserializer(books,many=True)
#         return Response(b.data)
#     elif(request.method=="POST"):
#         b=bookserializer(data=request.data)
#         if b.is_valid():
#             b.save()
#             return Response(b.data,status=status.HTTP_201_CREATED)
#     return Response(b.errors,status=status.HTTP_400_BAD_REQUEST)
# @api_view(['GET','PUT','DELETE'])
# def book_detail(request,pk):#primary key based
#     try:
#        book= Book.objects.get(pk=pk)
#     except:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     if (request.method == 'GET'):
#         b = bookserializer(book)
#         return Response(b.data)
#     elif(request.method=="PUT"):
#         b=bookserializer(book,data=request.data,)
#         if b.is_valid():
#             b.save()
#             return Response(b.data,status=status.HTTP_201_CREATED)
#         return Response(b.errors,status=status.HTTP_400_BAD_REQUEST)
#
#     elif(request.method=="DELETE"):
#         book.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)



#mixin class

# from rest_framework import mixins,generics
# #mixin classes based view
# class booklist(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
#         queryset = Book.objects.all()
#         serializer_class = bookserializer
#
#         def post(self,request):
#             return self.create(request)
#
#
# class book_detail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin,mixins.DestroyModelMixin, generics.GenericAPIView):
#     queryset = Book.objects.all()
#     serializer_class = bookserializer
#
#     def get(self, request,pk):
#         return self.retrieve(request)
#     def put(self, request,pk):
#         return self.update(request)
#     def delete(self, request,pk):
#         return self.destroy(request)


#generic class
# from rest_framework import mixins,generics
#
# class booklist(generics.ListCreateAPIView):
#         queryset = Book.objects.all()
#         serializer_class = bookserializer
#
#
#
# class book_detail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Book.objects.all()
#     serializer_class = bookserializer


#viewset
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

class bookviewset(viewsets.ModelViewSet):
        permission_classes =[IsAuthenticated]
        queryset = Book.objects.all()
        serializer_class = bookserializer

#all types request are commited by viewset
class userviewset(viewsets.ModelViewSet):
        # permission_classes = [IsAuthenticated]
        queryset =User.objects.all()
        serializer_class = userserializer



