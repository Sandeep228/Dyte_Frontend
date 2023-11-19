# Dyte_Assignment
# Log Ingestor And Query Interface

##### Overview
This system is designed to efficiently ingest, store, and query vast volumes of log data. It comprises a Log Ingestor responsible for accepting log data over HTTP and a Query Interface that enables users to perform full-text searches and apply filters on various log attributes.

## Technologies Used
- **Database**: Mongo Db
- **Frontend**: React js
- **Backend**: Node js

- ## Features Implemented
1. **Log Ingestor**
   - Ingests logs in the provided JSON format via HTTP on port `3000`.
   - Ensures scalability to handle high log volumes.
   - Optimizes I/O operations and database write speeds.
2. **Query Interface**
   - Offers a user-friendly interface (Web UI/CLI) for full-text search.
   - Includes filters for:
       - level
       - message
       - resourceId
       - timestamp
       - traceId
       - spanId
       - commit
       - metadata.parentResourceId
   - Implements efficient search algorithms for quick results.

  3. ## Advanced Features (Bonus):

These features aren’t compulsory to implement, however, adding them might increase the chances of your submission being accepted.

- Implement search within specific date ranges.
- Utilize regular expressions for search.
- Allow combining multiple filters.
- Provide real-time log ingestion and searching capabilities.
- Implement role-based access to the query interface.
- 
 ## How to Run the Project
 ### Installation

 1. Clone the repository
   ```bash
   git clone 
   ```
2. Navigate to client
   ```bash
   cd client
   ```
3. Install the node modules and run the frontend
   ```bash
   npm install
   npm start
   ```
4.  Navigate to server and install the node modules and run the frontend
   ```bash
  cd ../server
   npm install
   npm start
   ```
5. Start Log ingestor server
  http://localhost:3000


  
