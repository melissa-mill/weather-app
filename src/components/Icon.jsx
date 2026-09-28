import {
  CloudDrizzle,
  Sun,
  MoonStar,
  SunMedium,
  Moon,
  CloudSun,
  CloudMoon,
  Cloudy,
  CloudFog,
  Umbrella,
  CloudSunRain,
  CloudMoonRain,
  CloudRainWind,
  CloudSnow,
  CloudLightning,
} from "lucide-react";

function Icon({ code, size = 24 }) {
  const iconMap = {
    Sun,
    MoonStar,
    SunMedium,
    Moon,
    CloudDrizzle,
    CloudSun,
    CloudMoon,
    Cloudy,
    CloudFog,
    Umbrella,
    CloudSunRain,
    CloudMoonRain,
    CloudRainWind,
    CloudSnow,
    CloudLightning,
  };

  const IconComponent = iconMap[code];

  return <IconComponent size={size} />;
}

export default Icon;
