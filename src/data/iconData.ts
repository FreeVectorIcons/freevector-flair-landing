import * as icons from 'lucide-react';

export interface IconData {
  id: string;
  name: string;
  displayName: string;
  component: React.ComponentType<any>;
  category: string;
  tags: string[];
  popular?: boolean;
}

export const iconCategories = [
  'All',
  'UI & Controls',
  'Files & Folders',
  'Communication',
  'Business',
  'Social Media',
  'Weather',
  'E-commerce',
  'Travel',
  'Technology',
  'Media',
  'Navigation',
  'Health',
  'Gaming'
] as const;

export type IconCategory = typeof iconCategories[number];

// Real icon data using lucide-react icons
export const iconData: IconData[] = [
  // UI & Controls
  { id: 'home', name: 'Home', displayName: 'Home', component: icons.Home, category: 'UI & Controls', tags: ['house', 'main', 'start'], popular: true },
  { id: 'search', name: 'Search', displayName: 'Search', component: icons.Search, category: 'UI & Controls', tags: ['find', 'magnify', 'look'], popular: true },
  { id: 'settings', name: 'Settings', displayName: 'Settings', component: icons.Settings, category: 'UI & Controls', tags: ['gear', 'config', 'options'], popular: true },
  { id: 'menu', name: 'Menu', displayName: 'Menu', component: icons.Menu, category: 'UI & Controls', tags: ['hamburger', 'navigation', 'bars'] },
  { id: 'bell', name: 'Bell', displayName: 'Bell', component: icons.Bell, category: 'UI & Controls', tags: ['notification', 'alert', 'ring'] },
  { id: 'plus', name: 'Plus', displayName: 'Plus', component: icons.Plus, category: 'UI & Controls', tags: ['add', 'create', 'new'] },
  { id: 'minus', name: 'Minus', displayName: 'Minus', component: icons.Minus, category: 'UI & Controls', tags: ['remove', 'delete', 'subtract'] },
  { id: 'x', name: 'X', displayName: 'X', component: icons.X, category: 'UI & Controls', tags: ['close', 'cancel', 'exit'] },
  
  // Files & Folders
  { id: 'file', name: 'File', displayName: 'File', component: icons.File, category: 'Files & Folders', tags: ['document', 'paper', 'doc'] },
  { id: 'folder', name: 'Folder', displayName: 'Folder', component: icons.Folder, category: 'Files & Folders', tags: ['directory', 'storage', 'organize'] },
  { id: 'download', name: 'Download', displayName: 'Download', component: icons.Download, category: 'Files & Folders', tags: ['save', 'import', 'get'], popular: true },
  { id: 'upload', name: 'Upload', displayName: 'Upload', component: icons.Upload, category: 'Files & Folders', tags: ['send', 'export', 'share'] },
  { id: 'image', name: 'Image', displayName: 'Image', component: icons.Image, category: 'Files & Folders', tags: ['photo', 'picture', 'media'] },
  { id: 'file-text', name: 'FileText', displayName: 'Text File', component: icons.FileText, category: 'Files & Folders', tags: ['document', 'text', 'write'] },
  
  // Communication
  { id: 'mail', name: 'Mail', displayName: 'Mail', component: icons.Mail, category: 'Communication', tags: ['email', 'message', 'send'], popular: true },
  { id: 'phone', name: 'Phone', displayName: 'Phone', component: icons.Phone, category: 'Communication', tags: ['call', 'contact', 'telephone'] },
  { id: 'message-circle', name: 'MessageCircle', displayName: 'Message', component: icons.MessageCircle, category: 'Communication', tags: ['chat', 'talk', 'bubble'] },
  { id: 'video', name: 'Video', displayName: 'Video', component: icons.Video, category: 'Communication', tags: ['camera', 'record', 'film'] },
  { id: 'headphones', name: 'Headphones', displayName: 'Headphones', component: icons.Headphones, category: 'Communication', tags: ['audio', 'music', 'sound'] },
  
  // Business
  { id: 'briefcase', name: 'Briefcase', displayName: 'Briefcase', component: icons.Briefcase, category: 'Business', tags: ['work', 'job', 'professional'] },
  { id: 'calendar', name: 'Calendar', displayName: 'Calendar', component: icons.Calendar, category: 'Business', tags: ['date', 'schedule', 'time'], popular: true },
  { id: 'clock', name: 'Clock', displayName: 'Clock', component: icons.Clock, category: 'Business', tags: ['time', 'watch', 'schedule'] },
  { id: 'chart-bar', name: 'BarChart', displayName: 'Bar Chart', component: icons.BarChart, category: 'Business', tags: ['analytics', 'data', 'graph'] },
  { id: 'pie-chart', name: 'PieChart', displayName: 'Pie Chart', component: icons.PieChart, category: 'Business', tags: ['analytics', 'data', 'statistics'] },
  { id: 'target', name: 'Target', displayName: 'Target', component: icons.Target, category: 'Business', tags: ['goal', 'aim', 'focus'] },
  
  // Social Media
  { id: 'heart', name: 'Heart', displayName: 'Heart', component: icons.Heart, category: 'Social Media', tags: ['love', 'like', 'favorite'], popular: true },
  { id: 'star', name: 'Star', displayName: 'Star', component: icons.Star, category: 'Social Media', tags: ['favorite', 'rating', 'bookmark'] },
  { id: 'thumbs-up', name: 'ThumbsUp', displayName: 'Thumbs Up', component: icons.ThumbsUp, category: 'Social Media', tags: ['like', 'approve', 'good'] },
  { id: 'share', name: 'Share', displayName: 'Share', component: icons.Share, category: 'Social Media', tags: ['send', 'forward', 'distribute'] },
  { id: 'users', name: 'Users', displayName: 'Users', component: icons.Users, category: 'Social Media', tags: ['people', 'group', 'team'] },
  { id: 'user', name: 'User', displayName: 'User', component: icons.User, category: 'Social Media', tags: ['person', 'profile', 'account'], popular: true },
  
  // Weather
  { id: 'sun', name: 'Sun', displayName: 'Sun', component: icons.Sun, category: 'Weather', tags: ['sunny', 'bright', 'day'] },
  { id: 'moon', name: 'Moon', displayName: 'Moon', component: icons.Moon, category: 'Weather', tags: ['night', 'dark', 'crescent'] },
  { id: 'cloud', name: 'Cloud', displayName: 'Cloud', component: icons.Cloud, category: 'Weather', tags: ['cloudy', 'sky', 'weather'] },
  { id: 'cloud-rain', name: 'CloudRain', displayName: 'Rain', component: icons.CloudRain, category: 'Weather', tags: ['rainy', 'storm', 'precipitation'] },
  { id: 'snowflake', name: 'Snowflake', displayName: 'Snow', component: icons.Snowflake, category: 'Weather', tags: ['winter', 'cold', 'ice'] },
  { id: 'zap', name: 'Zap', displayName: 'Lightning', component: icons.Zap, category: 'Weather', tags: ['thunder', 'storm', 'electric'] },
  
  // E-commerce
  { id: 'shopping-cart', name: 'ShoppingCart', displayName: 'Shopping Cart', component: icons.ShoppingCart, category: 'E-commerce', tags: ['buy', 'purchase', 'store'], popular: true },
  { id: 'credit-card', name: 'CreditCard', displayName: 'Credit Card', component: icons.CreditCard, category: 'E-commerce', tags: ['payment', 'money', 'finance'] },
  { id: 'package', name: 'Package', displayName: 'Package', component: icons.Package, category: 'E-commerce', tags: ['box', 'delivery', 'shipping'] },
  { id: 'truck', name: 'Truck', displayName: 'Truck', component: icons.Truck, category: 'E-commerce', tags: ['delivery', 'shipping', 'transport'] },
  { id: 'tag', name: 'Tag', displayName: 'Tag', component: icons.Tag, category: 'E-commerce', tags: ['price', 'label', 'category'] },
  { id: 'dollar-sign', name: 'DollarSign', displayName: 'Dollar', component: icons.DollarSign, category: 'E-commerce', tags: ['money', 'price', 'cost'] },
  
  // Travel
  { id: 'map-pin', name: 'MapPin', displayName: 'Map Pin', component: icons.MapPin, category: 'Travel', tags: ['location', 'place', 'marker'] },
  { id: 'map', name: 'Map', displayName: 'Map', component: icons.Map, category: 'Travel', tags: ['navigation', 'route', 'geography'] },
  { id: 'plane', name: 'Plane', displayName: 'Airplane', component: icons.Plane, category: 'Travel', tags: ['flight', 'travel', 'aviation'] },
  { id: 'car', name: 'Car', displayName: 'Car', component: icons.Car, category: 'Travel', tags: ['vehicle', 'drive', 'transport'] },
  { id: 'compass', name: 'Compass', displayName: 'Compass', component: icons.Compass, category: 'Travel', tags: ['direction', 'navigation', 'explore'] },
  { id: 'globe', name: 'Globe', displayName: 'Globe', component: icons.Globe, category: 'Travel', tags: ['world', 'earth', 'international'] },
  
  // Technology
  { id: 'smartphone', name: 'Smartphone', displayName: 'Smartphone', component: icons.Smartphone, category: 'Technology', tags: ['mobile', 'phone', 'device'] },
  { id: 'laptop', name: 'Laptop', displayName: 'Laptop', component: icons.Laptop, category: 'Technology', tags: ['computer', 'device', 'work'] },
  { id: 'wifi', name: 'Wifi', displayName: 'WiFi', component: icons.Wifi, category: 'Technology', tags: ['internet', 'connection', 'wireless'] },
  { id: 'battery', name: 'Battery', displayName: 'Battery', component: icons.Battery, category: 'Technology', tags: ['power', 'energy', 'charge'] },
  { id: 'cpu', name: 'Cpu', displayName: 'CPU', component: icons.Cpu, category: 'Technology', tags: ['processor', 'computer', 'chip'] },
  { id: 'database', name: 'Database', displayName: 'Database', component: icons.Database, category: 'Technology', tags: ['storage', 'data', 'server'] },
  
  // Media
  { id: 'camera', name: 'Camera', displayName: 'Camera', component: icons.Camera, category: 'Media', tags: ['photo', 'picture', 'capture'], popular: true },
  { id: 'music', name: 'Music', displayName: 'Music', component: icons.Music, category: 'Media', tags: ['song', 'audio', 'sound'] },
  { id: 'play', name: 'Play', displayName: 'Play', component: icons.Play, category: 'Media', tags: ['start', 'video', 'media'] },
  { id: 'pause', name: 'Pause', displayName: 'Pause', component: icons.Pause, category: 'Media', tags: ['stop', 'break', 'hold'] },
  { id: 'volume-2', name: 'Volume2', displayName: 'Volume', component: icons.Volume2, category: 'Media', tags: ['sound', 'audio', 'speaker'] },
  { id: 'mic', name: 'Mic', displayName: 'Microphone', component: icons.Mic, category: 'Media', tags: ['record', 'voice', 'sound'] },
  
  // Navigation
  { id: 'arrow-left', name: 'ArrowLeft', displayName: 'Arrow Left', component: icons.ArrowLeft, category: 'Navigation', tags: ['back', 'previous', 'return'] },
  { id: 'arrow-right', name: 'ArrowRight', displayName: 'Arrow Right', component: icons.ArrowRight, category: 'Navigation', tags: ['forward', 'next', 'continue'] },
  { id: 'arrow-up', name: 'ArrowUp', displayName: 'Arrow Up', component: icons.ArrowUp, category: 'Navigation', tags: ['top', 'ascend', 'increase'] },
  { id: 'arrow-down', name: 'ArrowDown', displayName: 'Arrow Down', component: icons.ArrowDown, category: 'Navigation', tags: ['bottom', 'descend', 'decrease'] },
  { id: 'chevron-left', name: 'ChevronLeft', displayName: 'Chevron Left', component: icons.ChevronLeft, category: 'Navigation', tags: ['back', 'previous', 'left'] },
  { id: 'chevron-right', name: 'ChevronRight', displayName: 'Chevron Right', component: icons.ChevronRight, category: 'Navigation', tags: ['forward', 'next', 'right'] },
  
  // Health
  { id: 'activity', name: 'Activity', displayName: 'Activity', component: icons.Activity, category: 'Health', tags: ['health', 'fitness', 'pulse'] },
  { id: 'thermometer', name: 'Thermometer', displayName: 'Thermometer', component: icons.Thermometer, category: 'Health', tags: ['temperature', 'fever', 'health'] },
  { id: 'shield', name: 'Shield', displayName: 'Shield', component: icons.Shield, category: 'Health', tags: ['protection', 'security', 'safety'] },
  { id: 'cross', name: 'Cross', displayName: 'Cross', component: icons.Cross, category: 'Health', tags: ['medical', 'hospital', 'health'] },
  
  // Gaming
  { id: 'gamepad-2', name: 'Gamepad2', displayName: 'Gamepad', component: icons.Gamepad2, category: 'Gaming', tags: ['controller', 'game', 'play'] },
  { id: 'trophy', name: 'Trophy', displayName: 'Trophy', component: icons.Trophy, category: 'Gaming', tags: ['award', 'win', 'achievement'] },
  { id: 'dice-1', name: 'Dice1', displayName: 'Dice', component: icons.Dice1, category: 'Gaming', tags: ['game', 'random', 'chance'] },
  { id: 'swords', name: 'Swords', displayName: 'Swords', component: icons.Swords, category: 'Gaming', tags: ['battle', 'fight', 'combat'] }
];

// Helper functions for filtering
export const getIconsByCategory = (category: IconCategory): IconData[] => {
  if (category === 'All') return iconData;
  return iconData.filter(icon => icon.category === category);
};

export const getPopularIcons = (): IconData[] => {
  return iconData.filter(icon => icon.popular);
};

export const searchIcons = (query: string): IconData[] => {
  if (!query.trim()) return iconData;
  
  const searchTerm = query.toLowerCase();
  return iconData.filter(icon => 
    icon.name.toLowerCase().includes(searchTerm) ||
    icon.displayName.toLowerCase().includes(searchTerm) ||
    icon.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const filterIcons = (category: IconCategory, searchQuery: string): IconData[] => {
  let filtered = getIconsByCategory(category);
  if (searchQuery.trim()) {
    const searchTerm = searchQuery.toLowerCase();
    filtered = filtered.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm) ||
      icon.displayName.toLowerCase().includes(searchTerm) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  return filtered;
};