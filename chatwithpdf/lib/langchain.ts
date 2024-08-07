import { ChatOpenAI, OpenAI } from "@langchain/openai";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter} from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import pineconeClient from "./pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { PineconeConflictError } from "@pinecone-database/pinecone/dist/errors";
import { Index, RecordMetadata } from "@pinecone-database/pinecone"
import { adminDb } from "../firebaseAdmin";
import { auth } from "@clerk/nextjs/server";


const model = new ChatOpenAI({
    apiKey: process.env.OPEN_API_KEY,
    modelName:"gpt-4o"
})

export const indexName = "saif"


export async function generateEmbeddingPineconeVectorStore(docId:string) {
    const {userId} = await auth()

    if(!userId){
        throw new Error("user not found")
    }
    let pineconeVector;

    console.log("generating embedding ....")
    
    const embeddings = new OpenAIEmbeddings();

    const index = await pineconeClient.index(indexName)
}