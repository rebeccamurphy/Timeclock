from time import gmtime, strftime
time = strftime("%Y-%m-%d %H:%M:%S", gmtime())

with open("hours.txt", "a") as text_file: # writes out the urls to hours.txt 
   text_file.write(str.format("%s\n" % time))