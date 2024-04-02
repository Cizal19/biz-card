import { MongoClient, ObjectId } from "mongodb";
import { connectToDatabase } from "../utils/db";
import BusinessCard from "../app/components/BusinessCard";

const Home = ({ data }) => {
  return (
    <div>
      <BusinessCard businessInfo={data} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id; // Get id from query parameter

  // Connect to MongoDB
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    const client = await connectToDatabase();
    const db = client.db(process.env.MONGODB_NAME);

    // Query MongoDB for a single document by _id
    const data = await db
      .collection("formdatas")
      .findOne({ _id: new ObjectId(id) });

    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default Home;
