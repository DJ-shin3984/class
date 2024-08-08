import {gql, GraphQLClient } from "graphql-request"
import { IMutation } from "../types/generated/type"

const RESTORE_ACCESS_TOKEN = gql`
    mutation {
        restoreAccessToken {
            accessToken
        }
    }
`

export const getAccessToken = async(): Promise<string | undefined> => {
    try {
        const graphqlClient = new GraphQLClient(
            "https://backend-practice.codebootcamp.co.kr/graphql",
            {credentials: "include"}
        )
        const result = await graphqlClient.request<Pick<IMutation, "restoreAccessToken">>(RESTORE_ACCESS_TOKEN)
        const newAccessToken = result.restoreAccessToken.accessToken
        return newAccessToken
    } catch (error) {
        if(error instanceof Error) console.log("error: ",error.message)
    }
}