# deliverrry

Trying out **React Native** by building a Delivery Mobile App  

Found out a huge roadblock that `@sanity/client` has a dependency issue with React 18.  
The workaround was to write the GROQ queries and use the API URL for fetching, rather than initializing a Sanity Client instance.
