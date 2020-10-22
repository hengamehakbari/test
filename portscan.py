from socket import *
from termcolor import colored

get = input("Enter The Url:")
targetip = gethostbyname(get)
print("scan started =>", targetip)

for i in range(442,450):
     s = socket(AF_INET,SOCK_STREAM)
     result = s.connect_ex((targetip, i))
     if (result ==0 ):
        print (colored("[++] port %d: open" % (i,) +":" + " => " + getservbyport(i) , 'green'))
     else:
        print (colored("[!!] port %d: close" % (i,) , 'red'))

     s.close() 
