import React, { useState } from "react"
import { Button } from "../button/Button"
import { useGetUsersQuery } from "@/app/api/userApi"
import { Loading } from "@/assets/icons/loading"
import { Card } from "../card/Card"
import { Container } from "../container/Container"
import { useSelector } from "react-redux"
import { selectUsers } from "@/features/userSlice"

export const Users = () => {
  const [page, setPage] = useState(1) 
  const { isLoading } = useGetUsersQuery({
    page: page,
    count: 6,
  })
  const data = useSelector(selectUsers)

  console.log(isLoading, data);
  
  if (isLoading || !data) return <Loading />

  const { users, total_pages } = data  
  
  const handleShowMore = () => {
    if (page < total_pages) {
      setPage(prev => prev + 1) 
    }
  }

  return (
    <>
      <h2 className="text-4xl text-center mx-auto px-8">Working with GET request</h2>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
          {users.map(user => (
            <Card
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              photo={user.photo}
              position={user.position}
            />
          ))}
        </div>
      </Container>
      {page < total_pages && (
        <Button onClick={handleShowMore} disabled={isLoading}>
          {isLoading ? <Loading /> : "Show more"}
        </Button>
      )}
    </>
  )
}
