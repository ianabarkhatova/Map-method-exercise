
import { v4 as uuidv4 } from 'uuid';

type NewComponentPropsType = {
    students: StudentTypePropsType[]
};

type StudentTypePropsType = {
    id: number,
    name: string,
    age: number
}


export const NewComponent = ({students}: NewComponentPropsType) => {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const id = uuidv4();

    return (
        <table>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>

                {topCars.map((car) => {
                    return (
                        <tr id={uuidv4()}>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
        </table>
    )


        // return (
        //     <ul>
        //         {students.map((s) => {
        //             return (
        //                 <li key={s.id}>
        //                     <span>{s.name}</span>
    //                     <span> age: {s.age}</span>
    //                 </li>
    //             )
    //         })}
    //     </ul>
    // )
        ;
};