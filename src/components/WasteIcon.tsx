import React from 'react';
import {
  Banana,
  Utensils,
  Coffee,
  Carrot,
  Egg,
  Leaf,
  Trees,
  FileText,
  Package,
  Wine,
  Pizza,
  Milk,
  FlaskConical,
  Cylinder,
  Layers,
  Box,
  Shirt,
  ShieldAlert,
  BatteryCharging,
  Pill,
  Lightbulb,
  Paintbrush,
  AlertTriangle,
  Wind,
  Droplet,
  Smartphone,
  Cable,
  Laptop,
  Headphones,
  HeartHandshake,
  Bandage,
  Shield,
  Scissors,
  HelpCircle,
  ShoppingBag,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  Trophy,
  Flame,
  GraduationCap,
  Sprout
} from 'lucide-react';

interface WasteIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const WasteIcon: React.FC<WasteIconProps> = ({ name, className = 'w-5 h-5', size }) => {
  const iconProps = { className, size };

  switch (name) {
    case 'Banana': return <Banana {...iconProps} />;
    case 'Utensils': return <Utensils {...iconProps} />;
    case 'Coffee': return <Coffee {...iconProps} />;
    case 'Carrot': return <Carrot {...iconProps} />;
    case 'Egg': return <Egg {...iconProps} />;
    case 'Leaf': return <Leaf {...iconProps} />;
    case 'Trees': return <Trees {...iconProps} />;
    case 'FileText': return <FileText {...iconProps} />;
    case 'Package': return <Package {...iconProps} />;
    case 'Wine': return <Wine {...iconProps} />;
    case 'Pizza': return <Pizza {...iconProps} />;
    case 'Milk': return <Milk {...iconProps} />;
    case 'FlaskConical': return <FlaskConical {...iconProps} />;
    case 'Cylinder': return <Cylinder {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'Box': return <Box {...iconProps} />;
    case 'Shirt': return <Shirt {...iconProps} />;
    case 'ShieldAlert': return <ShieldAlert {...iconProps} />;
    case 'BatteryCharging': return <BatteryCharging {...iconProps} />;
    case 'Pill': return <Pill {...iconProps} />;
    case 'Lightbulb': return <Lightbulb {...iconProps} />;
    case 'Paintbrush': return <Paintbrush {...iconProps} />;
    case 'AlertTriangle': return <AlertTriangle {...iconProps} />;
    case 'Wind': return <Wind {...iconProps} />;
    case 'Droplet': return <Droplet {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'Cable': return <Cable {...iconProps} />;
    case 'Laptop': return <Laptop {...iconProps} />;
    case 'Headphones': return <Headphones {...iconProps} />;
    case 'HeartHandshake': return <HeartHandshake {...iconProps} />;
    case 'Bandage': return <Bandage {...iconProps} />;
    case 'Shield': return <Shield {...iconProps} />;
    case 'Scissors': return <Scissors {...iconProps} />;
    case 'ShoppingBag': return <ShoppingBag {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Award': return <Award {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'CheckCircle2': return <CheckCircle2 {...iconProps} />;
    case 'Trophy': return <Trophy {...iconProps} />;
    case 'Flame': return <Flame {...iconProps} />;
    case 'GraduationCap': return <GraduationCap {...iconProps} />;
    case 'Sprout': return <Sprout {...iconProps} />;
    default: return <HelpCircle {...iconProps} />;
  }
};
