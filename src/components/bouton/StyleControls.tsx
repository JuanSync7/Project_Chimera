// src/components/bouton/StyleControls.tsx
"use client";
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface StyleControlsProps {
  buttonText: string;
  onButtonTextChange: (text: string) => void;
  buttonStyle: React.CSSProperties;
  onStyleChange: (property: keyof React.CSSProperties, value: string | number) => void;
}

const StyleControls: React.FC<StyleControlsProps> = ({
  buttonText,
  onButtonTextChange,
  buttonStyle,
  onStyleChange,
}) => {
  
  const handleNumericStyleChange = (property: keyof React.CSSProperties, value: string, suffix: string = 'px') => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      onStyleChange(property, `${numericValue}${suffix}`);
    } else if (value === '') {
       onStyleChange(property, ''); // Allow clearing
    }
  };
  
  const handleSliderChange = (property: keyof React.CSSProperties, value: number[], suffix: string = 'px') => {
    onStyleChange(property, `${value[0]}${suffix}`);
  };

  const safeStringValue = (value: any): string => {
    return typeof value === 'string' || typeof value === 'number' ? String(value) : '';
  };
  
  const parsePixelValue = (value: any): number => {
    if (typeof value === 'string') {
      return parseFloat(value.replace('px', '')) || 0;
    }
    if (typeof value === 'number') {
      return value;
    }
    return 0;
  };


  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Customize Button</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="buttonText">Button Text</Label>
          <Input
            id="buttonText"
            value={buttonText}
            onChange={(e) => onButtonTextChange(e.target.value)}
            placeholder="Enter button text"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="textColor">Text Color</Label>
                <Input
                    id="textColor"
                    type="color"
                    value={safeStringValue(buttonStyle.color)}
                    onChange={(e) => onStyleChange('color', e.target.value)}
                    className="h-10 p-1"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="backgroundColor">Background Color</Label>
                <Input
                    id="backgroundColor"
                    type="color"
                    value={safeStringValue(buttonStyle.backgroundColor)}
                    onChange={(e) => onStyleChange('backgroundColor', e.target.value)}
                    className="h-10 p-1"
                />
            </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fontSize">Font Size ({parsePixelValue(buttonStyle.fontSize)}px)</Label>
          <Slider
            id="fontSize"
            min={8}
            max={48}
            step={1}
            value={[parsePixelValue(buttonStyle.fontSize)]}
            onValueChange={(value) => handleSliderChange('fontSize', value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fontWeight">Font Weight</Label>
          <Select
            value={safeStringValue(buttonStyle.fontWeight)}
            onValueChange={(value) => onStyleChange('fontWeight', value)}
          >
            <SelectTrigger id="fontWeight">
              <SelectValue placeholder="Select weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="bold">Bold</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
              <SelectItem value="300">300</SelectItem>
              <SelectItem value="400">400 (Normal)</SelectItem>
              <SelectItem value="500">500</SelectItem>
              <SelectItem value="600">600</SelectItem>
              <SelectItem value="700">700 (Bold)</SelectItem>
              <SelectItem value="800">800</SelectItem>
              <SelectItem value="900">900</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="paddingX">Padding X ({parsePixelValue(buttonStyle.paddingLeft)}px)</Label>
                 <Slider
                    id="paddingX"
                    min={0}
                    max={50}
                    step={1}
                    value={[parsePixelValue(buttonStyle.paddingLeft)]} // Assuming paddingLeft and paddingRight are same
                    onValueChange={(value) => {
                        handleSliderChange('paddingLeft', value);
                        handleSliderChange('paddingRight', value);
                    }}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="paddingY">Padding Y ({parsePixelValue(buttonStyle.paddingTop)}px)</Label>
                <Slider
                    id="paddingY"
                    min={0}
                    max={50}
                    step={1}
                    value={[parsePixelValue(buttonStyle.paddingTop)]} // Assuming paddingTop and paddingBottom are same
                     onValueChange={(value) => {
                        handleSliderChange('paddingTop', value);
                        handleSliderChange('paddingBottom', value);
                    }}
                />
            </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="borderRadius">Border Radius ({parsePixelValue(buttonStyle.borderRadius)}px)</Label>
          <Slider
            id="borderRadius"
            min={0}
            max={50}
            step={1}
            value={[parsePixelValue(buttonStyle.borderRadius)]}
            onValueChange={(value) => handleSliderChange('borderRadius', value)}
          />
        </div>

      </CardContent>
    </Card>
  );
};

export default StyleControls;
