
import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { Link , useNavigate, useLocation,} from 'react-router-dom';
import { BiCircle, BiMenuAltLeft,BiAccessibility,SiWelcometothejungle } from 'react-icons/bi';
import { useSelector } from "react-redux";
import namaste from "../../assets/namaste.jpg"

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {user} = useSelector((state)=> state.auth)
    const navigate = useNavigate();
    const location = useLocation();

    const hadleLogout = ()=> {
        localStorage.clear()
        alert("Logout sucessfully")
        navigate("/login")
    }

    return (
        <>
            <Button
                zIndex={'overlay'}
                pos={'fixed'}
                top={'1'}
                left={'12'}
                colorScheme="purple"
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>T-Shirt</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <Link to={'/'}>Home</Link>
                            </Button>

                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <Link to={'/about'}>About</Link>
                            </Button>

                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <Link to={'/products'}>Products</Link>
                            </Button>

                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <Link to={'/checkout'}>checkout</Link>
                            </Button>
                           <Button
                           top={"10px"}
                           ><span><img src={namaste} alt='namaste' height={"30px"} width={"60px"}/>welcome {"user "} </span></Button>
                            
                           
                        
                        <Button
                               
                                variant={'ghost'}
                                colorScheme={'purple'}
                                onClick={hadleLogout}
                                top={'20px'}
                            >
                                Logout
                            </Button>
                        </VStack>
                       

                        <HStack
                            pos={'absolute'}
                            bottom={'10'}
                            left={'0'}
                            w={'full'}
                            justifyContent={'space-evenly'}
                        >
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to={'/login'}>Log In</Link>
                            </Button>
                            <Button
                                onClick={onClose}
                                colorScheme={'purple'}
                                variant={'outline'}
                            >
                                <Link to={'/register'}>Sign Up</Link>
                            </Button>

                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Header;
