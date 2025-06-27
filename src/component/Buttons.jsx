function Buttons(props){

const Calbtn=[
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "="
    ];



    return(<>
    <div className="d-grid gap-2 d-md-block button-sty" >
        
{Calbtn.map((value)=>
 <button className="btn btn-primary button-sty1" type="button" onClick={()=>props.handleClick(value)}>{value}</button>
)}
 
    
</div>
    </>);
}
export default Buttons;