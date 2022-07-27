import { useQuery, gql } from '@apollo/client';

const GET_MY_SMASH_DATA = gql`
query Sets {
    player(id: 1103167) {
      id
      sets(perPage: 5, page: 10) {
        nodes {
          id
          displayScore
          event {
            id
            name
            tournament {
              id
              name
            }
          }
        }
      }
    }
  }
  `

export const useMySmashData = () => {
    const { error, data, loading} = useQuery(GET_MY_SMASH_DATA);
   
    return {
        error,
        data,
        loading,
    };
}