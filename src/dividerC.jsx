import "./App.css"; 
export function Divider({text}){
    return(
        <div className="mainCatalog">
        <span className="textCatalog">{text}</span>
        <div className="divider"></div>
    
    </div>
    );

}