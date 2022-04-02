import React,{useState} from "react";

export const CartContext=React.createContext({cartitems:[],
                                            totalitems:0,
                                            addtocart:(product)=>{},
                                            quantityincrement:(id)=>{},
                                            quantitydecrement:(id)=>{},
                                            removefromcart:(id)=>{},
                                            productincart:(id)=>{},
                                            total:(productlist)=>{},
                                            })

export function CartContextprovider(props){
    const [cart,setCart]=useState([])
    const addtocartHandler=(products)=>{setCart([...cart,products])}
    const quantityincrementHandler=(id)=>{
                                    let datalist=[]
                                    cart.forEach(item=>{
                                        if(item.id===id){
                                            let obj={
                                                qty:item.qty++,
                                                ...item}
                                            datalist.push(obj)
                                        }
                                        else{
                                            let obj={...item}
                                            datalist.push(obj)}    
                                    })
                                    setCart(datalist)}

    const quantitydecrementHandler=(id)=>{
                                        let datalist=[]
                                        cart.forEach(item=>{
                                            if(item.id===id){
                                                let obj={
                                                    qty:item.qty--,
                                                    ...item}
                                                datalist.push(obj)
                                            }
                                            else{
                                                let obj={...item}
                                                datalist.push(obj)}    
                                        })
                                        setCart(datalist)}

    const removefromcartHandler=(id)=>{setCart(cart.filter(product=>product.id!==id))}
    const productincartHandler=(id)=>{return cart.some(item=>{return item.id===id})}
    const totalHandler=(productlist)=>{
        let t=0
        let scharge=100
        let tax=45
        let shippingcharge=false
        let totalobj=[]
        productlist.map(item=>{
            if((item.price*item.qty)<100){
                shippingcharge=true
                t=t+scharge+tax+(item.price*item.qty)}
            else{
                shippingcharge=false
                t=t+tax+(item.price*item.qty)}
            return t
        })
        totalobj.push(t)
        totalobj.push(shippingcharge)
        return totalobj
    }

    const context={cartitems:cart,
                totalitems:cart.length,
                addtocart:addtocartHandler,
                quantityincrement:quantityincrementHandler,
                quantitydecrement:quantitydecrementHandler,
                removefromcart:removefromcartHandler,
                productincart:productincartHandler,
                total:totalHandler}

    return(
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}