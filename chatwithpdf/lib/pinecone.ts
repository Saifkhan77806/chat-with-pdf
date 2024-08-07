import {Pinecone} from "@pinecone-database/pinecone";

if(!process.env.PINE_CONE_API_KEY){
    throw new Error("pinecone api key is not setup")
}

const pineconeClient = new Pinecone({
  apiKey: process.env.PINE_CONE_API_KEY
});

export default pineconeClient;