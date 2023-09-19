var APP_DATA = {
  "scenes": [
    {
      "id": "0-intrare",
      "name": "Intrare",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.3070441230494474,
        "pitch": -0.050325662790950076,
        "fov": 1.3662485491026943
      },
      "linkHotspots": [
        {
          "yaw": -1.3628540831394282,
          "pitch": 0.29492026098952273,
          "rotation": 0,
          "target": "1-sufragerie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sufragerie",
      "name": "Sufragerie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.9493574971368233,
        "pitch": 0.08805622251501966,
        "fov": 1.3662485491026943
      },
      "linkHotspots": [
        {
          "yaw": 2.255894757232981,
          "pitch": 0.1079956603707437,
          "rotation": 0,
          "target": "0-intrare"
        },
        {
          "yaw": -0.22442394801892007,
          "pitch": 0.18124444042264543,
          "rotation": 1.5707963267948966,
          "target": "3-baie"
        },
        {
          "yaw": -1.0605979564744565,
          "pitch": 0.11178839516544592,
          "rotation": 4.71238898038469,
          "target": "2-bucatarie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bucatarie",
      "name": "Bucatarie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.030878902150666576,
        "pitch": 0.04473392248084629,
        "fov": 1.3662485491026943
      },
      "linkHotspots": [
        {
          "yaw": 1.509603035954056,
          "pitch": 0.1769765927165743,
          "rotation": 0,
          "target": "5-balcon"
        },
        {
          "yaw": -1.4890824172043722,
          "pitch": 0.14169385474531815,
          "rotation": 0,
          "target": "1-sufragerie"
        },
        {
          "yaw": -2.0521802499419177,
          "pitch": 0.09586611860775385,
          "rotation": 4.71238898038469,
          "target": "3-baie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-baie",
      "name": "Baie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.633213642314285,
        "pitch": -0.10394095914907986,
        "fov": 1.3662485491026943
      },
      "linkHotspots": [
        {
          "yaw": 1.2230629177058212,
          "pitch": 0.20243388763734593,
          "rotation": 7.853981633974483,
          "target": "4-dormitor"
        },
        {
          "yaw": 0.6958122077508069,
          "pitch": 0.2262794438046356,
          "rotation": 0,
          "target": "2-bucatarie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormitor",
      "name": "Dormitor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.4889390129036988,
        "pitch": 0.013047394056917128,
        "fov": 1.3662485491026943
      },
      "linkHotspots": [
        {
          "yaw": 1.7563186147130132,
          "pitch": 0.0677952627424947,
          "rotation": 0,
          "target": "3-baie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-balcon",
      "name": "Balcon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.672251858981868,
        "pitch": -0.01858188748077616,
        "fov": 1.3662485491026943
      },
      "linkHotspots": [
        {
          "yaw": 0.010211310420698894,
          "pitch": 0.25121701382639117,
          "rotation": 0,
          "target": "2-bucatarie"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartament Verona",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
