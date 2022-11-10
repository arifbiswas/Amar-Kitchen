import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../../../Contexts/AuthContext/AuthContext';
import ReviewTableRow from '../../ReviewTableRow/ReviewTableRow';



const MyReviews = () => {
    const {user} = useContext(AuthProvider);
    let serial = 0;
    const [myReviews , setMyReviews] = useState([]);

    myReviews.sort(function(a, b) { return new Date(b.postDate) - new Date(a.postDate) })
    
    useEffect(()=>{
        fetch(`https://ass-11-amar-kitchen-server-arifbiswas.vercel.app/reviews/?userEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyReviews(data)
        })
        .catch(e =>{
            console.log(e);
        })
    },[user?.email])
    

    return (
        <div>
            
<div class="overflow-x-auto  shadow-md sm:rounded-lg">
    <div class="flex justify-between items-center py-4 bg-white ">
        
    </div>
    { myReviews ? <>
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="py-3 px-6 text-center w-10">
                    Serial
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    Picture
                </th>
                <th scope="col" class="py-3 px-6 text-center w-10">
                Rating
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                   Name
                </th>
                <th scope="col" class="py-3 px-6 w-96 text-center">
                   Review's
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    Time&Day
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
            
            myReviews.map(myReview => <ReviewTableRow
            key={myReview._id} 
            myReview={myReview}
            myReviews={myReviews} 
            setMyReviews={setMyReviews}
            serial={serial = serial + 1}
            ></ReviewTableRow>)}
        </tbody>
    </table>
    </>
    :<>
    <h1 className='flex justify-center h-[100vh] items-center my-12 text-2xl lg:text-5xl font-bold text-yellow-500'>Please Review first any service</h1>
    </>
       }
</div>

        </div>
    );
};

export default MyReviews;