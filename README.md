#MongoDB Tweet Utility Server

This server was created in order to have a simple method of writing tweets from
a text file to a Mongo Database. In doing so we were able to benchmark the
reading process from Mongo compared to creating a readStream from a text file. 

By using a mongo query at the point of reading, we discovered that in producing
an array from a list of 23000+ tweets, the readStream took 1.25ms whereas mongoDB took
1.09ms. 

The lessons from this experiment have been fed into our final project, where
instead of writing incoming tweets to a text file, we will now write them
directly to MongoDB in a stripped down form. We have a good idea of what
information we need to take from each tweet, in order to keep the data reading
and plotting as efficient as possible. 

You can find our final project repo [here](https://github.com/ejbyne/hipspot).
