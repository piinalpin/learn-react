import React, { Component } from 'react';
import graphql from 'babel-plugin-relay';
import { Container, Feed, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { graphql, QueryRenderer } from "react-relay";
import environment from "./FetchGraphQL";

const query = graphql`
  query {
    getAllPerson {
      id
      firstName
      lastName
      address
      createdAt
    }
    getAllBook {
        id
        title
        releaseDate
        description
        author {
            id
            firstName
            address
            createdAt
        }
        createdAt
    }
  }
`;


class App extends Component {
  /* 
  If using ApolloClient
  */
  render() {
    console.log(this.props.data);
    return (
        // <Container text textAlign="center">
        //   <Card centered fluid>
        //     <Card.Content>
        //       <Card.Header>Person Data</Card.Header>
        //     </Card.Content>
        //     <Card.Content>
        //       {this.props.data.getAllPerson && (
        //         <Feed>
        //           {this.props.data.getAllPerson.map(person => (
        //               <Feed.Event key={person.id}>
        //                 <Feed.Content>
        //                   <Feed.Label content={person.firstName} />
        //                   <Feed.Date content={person.createdAt} />
        //                   <Feed.Summary>{person.address}</Feed.Summary>
        //                 </Feed.Content>
        //               </Feed.Event>
        //             ))}
        //           </Feed>
        //         )
        //       }
        //     </Card.Content>
        //   </Card>
        //   <Card centered fluid>
        //     <Card.Content>
        //       <Card.Header>Book Data</Card.Header>
        //     </Card.Content>
        //     <Card.Content>
        //       {this.props.data.getAllPerson && (
        //         <Feed>
        //           {this.props.data.getAllBook.map(book => (
        //               <Feed.Event key={book.id}>
        //                 <Feed.Content>
        //                   <Feed.Label>{book.title} - {book.author.firstName}</Feed.Label>
        //                   <Feed.Date content={book.releaseDate} />
        //                   <Feed.Summary>{book.description}</Feed.Summary>
        //                 </Feed.Content>
        //               </Feed.Event>
        //             ))}
        //           </Feed>
        //         )
        //       }
        //     </Card.Content>
        //   </Card>
        // </Container>

        /**
         * If using relay
         */

         <QueryRenderer environment={environment} query={query} render={({error, props}) => {
           if (error) {
             return <div>Error</div>
           }

           if (!props) {
            return <div>Loading...</div>
           }

           return <div>{props}</div>
         }} />
    );
  }
}

// const queries = gql`
//   query {
//     getAllPerson {
//       id
//       firstName
//       lastName
//       address
//       createdAt
//     }
//     getAllBook {
//         id
//         title
//         releaseDate
//         description
//         author {
//             id
//             firstName
//             address
//             createdAt
//         }
//         createdAt
//     }
//   }
// `;

export default App;

// export default graphql(queries, {
//   options: {
//     variables: {

//     }
//   }
// })(App);
