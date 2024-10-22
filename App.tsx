import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
} from "@/components/ui/popover";
import { Text } from "@/components/ui/text";

function PopoverExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement="bottom"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Open Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <Text>Alex</Text>
      </PopoverContent>
    </Popover>
  );
}

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="flex-1 justify-center items-center">
        <PopoverExample />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
