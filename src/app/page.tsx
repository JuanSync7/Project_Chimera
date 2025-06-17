// src/app/page.tsx
"use client";
import React, { useState, CSSProperties } from 'react';
import BoutonDisplay from '@/components/bouton/BoutonDisplay';
import StyleControls from '@/components/bouton/StyleControls';
import AiStyler from '@/components/bouton/AiStyler';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { SuggestButtonStyleOutput } from '@/ai/flows/suggest-button-style';
import type { IconName } from '@/components/icons/DynamicIcon';


export default function BoutonPage() {
  const [buttonText, setButtonText] = useState<string>("Bouton");
  const [buttonIcon, setButtonIcon] = useState<IconName | string | undefined>(undefined);
  const [buttonStyle, setButtonStyle] = useState<CSSProperties>({
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "24px",
    paddingRight: "24px",
    border: "2px solid transparent", // Added for accentColor usage
    borderRadius: "8px",
    fontSize: "16px",
    fontFamily: "var(--font-inter)",
    fontWeight: "normal",
    cursor: "pointer",
    boxShadow: "0 4px 14px 0 hsla(0, 0%, 0%, 0.1)",
  });

  const handleStyleChange = (property: keyof CSSProperties, value: string | number) => {
    setButtonStyle(prevStyle => ({
      ...prevStyle,
      [property]: value,
    }));
  };

  const handleAiStyleGenerated = (aiOutput: SuggestButtonStyleOutput) => {
    setButtonStyle(prevStyle => ({
      ...prevStyle,
      color: aiOutput.color,
      backgroundColor: aiOutput.backgroundColor,
      borderColor: aiOutput.accentColor, // Use accentColor for border
      borderWidth: aiOutput.accentColor ? "2px" : prevStyle.borderWidth, // Add border only if accentColor is present
      borderStyle: aiOutput.accentColor ? "solid" : prevStyle.borderStyle,
      fontFamily: aiOutput.typography || prevStyle.fontFamily, // Assuming typography is font-family
    }));
    setButtonIcon(aiOutput.icon as IconName);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 selection:bg-accent selection:text-accent-foreground">
      <header className="w-full max-w-5xl mb-8 md:mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Bouton
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-2">
          Craft your perfect button, with a touch of AI magic.
        </p>
      </header>

      <main className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-start">
        {/* Button Preview Area */}
        <Card className="md:col-span-1 sticky top-8 shadow-2xl rounded-xl">
           <div className="flex flex-col items-center justify-center p-8 md:p-12 min-h-[250px] md:min-h-[300px] bg-gradient-to-br from-background to-secondary/30 rounded-xl">
            <BoutonDisplay text={buttonText} style={buttonStyle} iconName={buttonIcon} />
          </div>
        </Card>

        {/* Controls Area */}
        <Card className="md:col-span-1 shadow-2xl rounded-xl">
          <Tabs defaultValue="manual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 sticky top-0 bg-card z-10 p-1 rounded-t-xl">
              <TabsTrigger value="manual" className="text-sm">Manual Styles</TabsTrigger>
              <TabsTrigger value="ai" className="text-sm">AI Styles</TabsTrigger>
            </TabsList>
            <Separator />
            <TabsContent value="manual" className="p-0">
              <StyleControls
                buttonText={buttonText}
                onButtonTextChange={setButtonText}
                buttonStyle={buttonStyle}
                onStyleChange={handleStyleChange}
              />
            </TabsContent>
            <TabsContent value="ai" className="p-0">
              <AiStyler onStyleGenerated={handleAiStyleGenerated} />
            </TabsContent>
          </Tabs>
        </Card>
      </main>
      <footer className="w-full max-w-5xl mt-16 text-center text-muted-foreground text-sm pb-8">
        <p>&copy; {new Date().getFullYear()} Bouton. Styled with care.</p>
      </footer>
    </div>
  );
}
