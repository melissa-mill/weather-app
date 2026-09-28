const weatherCodes = {
  0: {
    day: {
      description: "Sunny",
      icon: "Sun",
    },
    night: {
      description: "Clear",
      icon: "MoonStar",
    },
  },
  1: {
    day: {
      description: "Mainly Sunny",
      icon: "SunMedium",
    },
    night: {
      description: "Mainly Clear",
      icon: "Moon",
    },
  },
  2: {
    day: {
      description: "Partly Cloudy",
      icon: "CloudSun",
    },
    night: {
      description: "Partly Cloudy",
      icon: "CloudMoon",
    },
  },
  3: {
    day: {
      description: "Cloudy",
      icon: "Cloudy",
    },
    night: {
      description: "Cloudy",
      icon: "Cloudy",
    },
  },
  45: {
    day: {
      description: "Foggy",
      icon: "CloudFog",
    },
    night: {
      description: "Foggy",
      icon: "CloudFog",
    },
  },
  48: {
    day: {
      description: "Rime Fog",
      icon: "CloudFog",
    },
    night: {
      description: "Rime Fog",
      icon: "CloudFog",
    },
  },
  51: {
    day: {
      description: "Light Drizzle",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Light Drizzle",
      icon: "CloudDrizzle",
    },
  },
  53: {
    day: {
      description: "Drizzle",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Drizzle",
      icon: "CloudDrizzle",
    },
  },
  55: {
    day: {
      description: "Heavy Drizzle",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Heavy Drizzle",
      icon: "CloudDrizzle",
    },
  },
  56: {
    day: {
      description: "Light Freezing Drizzle",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Light Freezing Drizzle",
      icon: "CloudDrizzle",
    },
  },
  57: {
    day: {
      description: "Freezing Drizzle",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Freezing Drizzle",
      icon: "CloudDrizzle",
    },
  },
  61: {
    day: {
      description: "Light Rain",
      icon: "Umbrella",
    },
    night: {
      description: "Light Rain",
      icon: "Umbrella",
    },
  },
  63: {
    day: {
      description: "Rain",
      icon: "CloudSunRain",
    },
    night: {
      description: "Rain",
      icon: "CloudMoonRain",
    },
  },
  65: {
    day: {
      description: "Heavy Rain",
      icon: "CloudRainWind",
    },
    night: {
      description: "Heavy Rain",
      icon: "CloudRainWind",
    },
  },
  66: {
    day: {
      description: "Light Freezing Rain",
      icon: "CloudRainWind",
    },
    night: {
      description: "Light Freezing Rain",
      icon: "CloudRainWind",
    },
  },
  67: {
    day: {
      description: "Freezing Rain",
      icon: "CloudRainWind",
    },
    night: {
      description: "Freezing Rain",
      icon: "CloudRainWind",
    },
  },
  71: {
    day: {
      description: "Light Snow",
      icon: "CloudSnow",
    },
    night: {
      description: "Light Snow",
      icon: "CloudSnow",
    },
  },
  73: {
    day: {
      description: "Snow",
      icon: "CloudSnow",
    },
    night: {
      description: "Snow",
      icon: "CloudSnow",
    },
  },
  75: {
    day: {
      description: "Heavy Snow",
      icon: "CloudSnow",
    },
    night: {
      description: "Heavy Snow",
      icon: "CloudSnow",
    },
  },
  77: {
    day: {
      description: "Snow Grains",
      icon: "CloudSnow",
    },
    night: {
      description: "Snow Grains",
      icon: "CloudSnow",
    },
  },
  80: {
    day: {
      description: "Light Showers",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Light Showers",
      icon: "CloudDrizzle",
    },
  },
  81: {
    day: {
      description: "Showers",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Showers",
      icon: "CloudDrizzle",
    },
  },
  82: {
    day: {
      description: "Heavy Showers",
      icon: "CloudDrizzle",
    },
    night: {
      description: "Heavy Showers",
      icon: "CloudDrizzle",
    },
  },
  85: {
    day: {
      description: "Light Snow Showers",
      icon: "CloudSnow",
    },
    night: {
      description: "Light Snow Showers",
      icon: "CloudSnow",
    },
  },
  86: {
    day: {
      description: "Snow Showers",
      icon: "CloudSnow",
    },
    night: {
      description: "Snow Showers",
      icon: "CloudSnow",
    },
  },
  95: {
    day: {
      description: "Thunderstorm",
      icon: "CloudLightning",
    },
    night: {
      description: "Thunderstorm",
      icon: "CloudLightning",
    },
  },
  96: {
    day: {
      description: "Light Thunderstorms With Hail",
      icon: "CloudLightning",
    },
    night: {
      description: "Light Thunderstorms With Hail",
      icon: "CloudLightning",
    },
  },
  99: {
    day: {
      description: "Thunderstorm With Hail",
      icon: "CloudLightning",
    },
    night: {
      description: "Thunderstorm With Hail",
      icon: "CloudLightning",
    },
  },
};

export const getWeatherIcon = (code, isDay = true) => {
  const weather = weatherCodes[code];

  if (!weather && isDay) return "CloudSun";
  if (!weather && !isDay) return "CloudMoon";

  return isDay ? weather.day.icon : weather.night.icon;
};
