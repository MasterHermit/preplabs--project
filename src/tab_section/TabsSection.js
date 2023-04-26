import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import AppliedCard from "./AppliedCard";
import MyjobsAlertCard from "./MyjobsAlertCard";
import SavedCard from "./SavedCard";

export default function TabsSection() {
    return (
        <Tabs isFitted>
            <TabList mb="1em">
                <Tab>Applied</Tab>
                <Tab>Saved</Tab>
                <Tab>My Jobs Alert</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <AppliedCard />
                    <AppliedCard />
                    <AppliedCard />
                </TabPanel>
                <TabPanel>
                    <SavedCard />
                </TabPanel>
                <TabPanel>
                    <MyjobsAlertCard />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
