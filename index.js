function Mendchilgee(){
    return <h1>hello </h1>
}
function Mendchilgee123(props){
    return (
        <div>
            <h1>{props.ner}</h1>
            <p>{props.nas}</p>
            <p>{props.surchbgaeseh?"unen" : "choloo avsan"}</p>
            <p>{props.dunguud[0]}</p>
            <p>{props.dunguud[1]}</p>
            <p>{props.dunguud[2]}</p>

            {props.dunguud.map(
                (el, index) =>
                    <p key={index}>{el}</p>
                )
            }
            <p>props.myObj.mergejil</p>
            <p>props.myObj.index</p>
        </div>
    )
}
ReactDOM.render(
    <Mendchilgee123 ner={"Hello dorj"}
    nas={20}
    surchbgaeseh={true}
    dunguud={[80, "dalan yos, true"]}
    myObj = { {mergejil: 'SW', index: 'DS2015877' } }/>,
    document.getElementById('root')
);