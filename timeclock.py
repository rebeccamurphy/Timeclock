import time
currTime = time.ctime()

def linecount(filename):
    count = 0
    for x in open(filename):
        count += 1
    return count
count = linecount('hours.txt')
with open("hours.txt", "a") as text_file: # writes out the urls to hours.txt 
	if (count %2 ==0):
   		text_file.write("IN:" + str.format("%s\n" % currTime))
   	else:
   		text_file.write("OUT:" + str.format("%s\n" % currTime))