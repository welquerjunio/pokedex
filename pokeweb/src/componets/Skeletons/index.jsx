import { Container, Skeleton } from '@mui/material'
import Rect from 'react'

export const Skeletons = () => {
    return(

        <Container maxWidth="xxl">
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBotton: "1em"}} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBotton: "1em"}} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBotton: "1em"}} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBotton: "1em"}} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBotton: "1em"}} />
            </Container>
    );
    


};