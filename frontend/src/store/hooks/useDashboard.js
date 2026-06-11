import {useAllGetUser} from "./useUser";
import {useAllGetSales} from "./useSales";
import { useMemo } from "react";
import { useAllGetProduct } from "./useProduct";


export const useDashboard = () => {
    const {data: salesList=[]} = useAllGetSales();
    const {data: userList=[]} = useAllGetUser();
    const {data: productList=[]} = useAllGetProduct();
    
    const kpi = useMemo(() => {
        //총매출액
        const  totalSalesAmount = salesList.reduce((sum,item)=> (
        sum + Number(item.total_price)
        ),0)
        const totalOrderCount = salesList.length;
        const totalQuantity = salesList.reduce((sum, item) => (
            sum + Number(item.quantity)
        ), 0);
        const customerCount = userList.length;
        const productCount = productList.length;
        return {
            totalSalesAmount,
            totalOrderCount,
            totalQuantity,
            customerCount,
            productCount
        };
    }, [salesList, userList, productList]);
    //고객 랭킹
const userRanking = useMemo(() => {
        const obj = {}
        salesList.forEach(item => {
            obj[item.user_id] = (obj[item.user_id] || 0) +1
        });
        const userRankingObj = Object.entries(obj)
                    .map(([userId, count]) => {
                    const user = userList.find(u => String(u.id) === String(userId))
                    return {
                        name: user?.name || "unknown",
                        quantity: count
                     }
                    }) 
        .sort((a,b) => b.quantity - a.quantity) //내림차순
        .slice(0,10); // 랭킹 10명
        return userRankingObj;
    },[salesList, productList]); 



    //판매 상품 랭킹
    const productRanking = useMemo(() => {
        const obj = {}
        salesList.forEach(item => {
            obj[item.product_id] = (obj[item.product_id] || 0) +1
        });
        const productRankingObj = Object.entries(obj)
                    .map(([productId, quantity]) => {
                    const product = productList.find(p => String(p.id) === String(productId))
                    return {
                        name: product?.name || "unknown",
                        quantity
                     }
                    }) 
        .sort((a,b) => b.quantity - a.quantity) //내림차순
        .slice(0,10); // 랭킹 10명
        return productRankingObj;
    },[salesList, productList]); 

   return {
        kpi,
        userRanking,
        productRanking
    }
}


