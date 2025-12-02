import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({

    reducerpath: "authApi",
    baseQuery: fetchBaseQuery({

        baseUrl:"http://localhost:8000/api/auth",
        credentials: "include"
    }),

    endpoints: (builder) =>({

        login: builder.mutation({

            query: (data) =>({

                url: "/signin",
                method: "POST",
                body: data,
                credentials: "include" 
            })

        }),


        logout: builder.query({
            query:() =>{
                return{

                    url:"/logout",
                    method:"GET",
                    credentials:"include"
                }
            }
        })
    })


})

export const { useLoginMutation } = authApi;