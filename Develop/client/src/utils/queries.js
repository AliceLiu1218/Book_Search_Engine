import { gql } from '@apollo/client';

export const QUERY_GETME = gql`
    query singleUser($userId: ID!) {
        singleUser(userId: $userId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
    

`;

