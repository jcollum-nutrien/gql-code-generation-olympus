import {request, gql as requestGql} from 'graphql-request'
import {graphql} from './generated/faker-olympus'
import {Card} from './generated/faker-olympus/graphql'

const getCardById = requestGql`
query draw {
  drawCard {
    name
    description
    Attack
    Defense
    info
    skills
  }
}
`;

const endpoint = process.env.ENDPOINT || 'https://faker.graphqleditor.com/a-team/olympus/graphql/'

const run = async () => {
  // the card by id endpoint might be returning random cards, this endpoint isn't well documented
  request<Card>({
    url: endpoint,
    document: getCardById,
  }).then((data) => console.table(data)).catch((err)=> console.error(err))
}

run()
