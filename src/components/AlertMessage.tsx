import {
   Alert,
   AlertDescription,
   AlertIcon,
   AlertTitle,
} from '@chakra-ui/react'
import PropTypes from 'prop-types' // ES6
interface Props {
   status: any
   title: string
   description: string
}

export const AlertMessage = ({ status, title, description }: Props) => {
   return (
      <Alert status={status}>
         <AlertIcon />
         <AlertTitle fontSize={15} mr={2}>
            {title}
         </AlertTitle>
         <AlertDescription fontSize={15}>{description}</AlertDescription>
      </Alert>
   )
}
AlertMessage.propTypes = {
   status: PropTypes.any,
   title: PropTypes.string,
   description: PropTypes.string,
}
