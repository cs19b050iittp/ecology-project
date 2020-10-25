import React , {Component} from "react" ;

class Vidly extends Component {

    movies = [
        {
            name : "dabangg",
            year : 2010
        }
    ];
    

    render(){

        return (

            <div>
               <table>
                   <thead>
                       <tr>
                           <th>Title</th>
                           <th>Genre</th>
                           <th>Date</th>
                       </tr>
                   </thead>

                   <tbody>
                       <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                   </tbody>
               </table>
            </div>

        )
    }
}

export default Vidly;