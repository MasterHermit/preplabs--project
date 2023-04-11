import { useState } from 'react';
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react';

function JobDrawers() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => setIsDrawerOpen(true);
    const handleDrawerClose = () => setIsDrawerOpen(false);

    return (
        <Box display="flex">
            {/* First Drawer */}
            <Drawer placement="left" isOpen={isDrawerOpen} onClose={handleDrawerClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Drawer 1</DrawerHeader>
                    <DrawerBody>Drawer 1 content goes here.</DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Second Drawer */}
            <Drawer placement="left" isOpen={isDrawerOpen} onClose={handleDrawerClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Drawer 2</DrawerHeader>
                    <DrawerBody>Drawer 2 content goes here.</DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Third Drawer */}
            <Drawer placement="left" isOpen={isDrawerOpen} onClose={handleDrawerClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Drawer 3</DrawerHeader>
                    <DrawerBody>Drawer 3 content goes here.</DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Fourth Drawer */}
            <Drawer placement="left" isOpen={isDrawerOpen} onClose={handleDrawerClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Drawer 4</DrawerHeader>
                    <DrawerBody>Drawer 4 content goes here.</DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Button to open the drawers */}
            <Button onClick={handleDrawerOpen}>Open Drawers</Button>
        </Box>
    );
}

export default JobDrawers;