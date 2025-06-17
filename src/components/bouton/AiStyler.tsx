// src/components/bouton/AiStyler.tsx
"use client";
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { suggestButtonStyle, type SuggestButtonStyleOutput } from '@/ai/flows/suggest-button-style';
import { useToast } from "@/hooks/use-toast";

interface AiStylerProps {
  onStyleGenerated: (styleProps: SuggestButtonStyleOutput) => void;
}

const AiStyler: React.FC<AiStylerProps> = ({ onStyleGenerated }) => {
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleGenerateStyle = async () => {
    if (!description.trim()) {
      toast({
        title: "Description Missing",
        description: "Please describe the button's purpose.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    try {
      const result = await suggestButtonStyle({ description });
      onStyleGenerated(result);
      toast({
        title: "Style Generated!",
        description: "AI has suggested a new style for your button.",
      });
    } catch (error) {
      console.error('AI Style Generation Error:', error);
      toast({
        title: "Error Generating Style",
        description: "Could not generate style. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">AI-Powered Styling</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="buttonDescription">Describe your button's purpose</Label>
          <Textarea
            id="buttonDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., A primary call to action for submitting a form, A playful button for a game..."
            rows={4}
          />
        </div>
        <Button onClick={handleGenerateStyle} disabled={isLoading} className="w-full">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Generate Style with AI
        </Button>
      </CardContent>
    </Card>
  );
};

export default AiStyler;
