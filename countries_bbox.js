// extracted from http//www.naturalearthdata.com/download/110m/cultural/ne_110m_admin_0_countries.zip
// under public domain terms

var countries_bbox = {
    'AD': ['Andorra', [1.405404, 42.427745, 1.795418, 42.656415]],
    'AE': ['United Arab Emirates', [51.5795186705, 22.4969475367, 56.3968473651, 26.055464179]],
    'AF': ['Afghanistan', [60.5284298033, 29.318572496, 75.1580277851, 38.4862816432]],
    'AG': ['Antigua and Barbuda', [-62.359054, 16.929362, -61.640823, 17.744734]],
    'AI': ['Anguilla', [-63.464673, 18.132158, -62.903737, 18.602913]],
    'AL': ['Albania', [19.3044861183, 39.624997667, 21.0200403175, 42.6882473822]],
    'AM': ['Armenia', [43.5827458026, 38.7412014837, 46.5057198423, 41.2481285671]],
    'AO': ['Angola', [11.6400960629, -17.9306364885, 24.0799052263, -4.43802336998]],
    'AQ': ['Antarctic Peninsula', [-87, -76, -36, -58]],
    'AR': ['Argentina', [-73.4154357571, -55.25, -53.628348965, -21.8323104794]],
    'AT': ['Austria', [9.47996951665, 46.4318173285, 16.9796667823, 49.0390742051]],
    'AU': ['Australia', [113.338953078, -43.6345972634, 153.569469029, -10.6681857235]],
    'AW': ['Aruba', [-70.09452679952362, 12.407243342751821, -69.82504218458341, 12.639490542218121]],
    'AZ': ['Azerbaijan', [44.7939896991, 38.2703775091, 50.3928210793, 41.8606751572]],
    'BA': ['Bosnia and Herzegovina', [15.7500260759, 42.65, 19.59976, 45.2337767604]],
    'BB': ['Barbados', [-59.645815, 13.045699, -59.417162, 13.344526]],
    'BD': ['Bangladesh', [88.0844222351, 20.670883287, 92.6727209818, 26.4465255803]],
    'BE': ['Belgium', [2.51357303225, 49.5294835476, 6.15665815596, 51.4750237087]],
    'BF': ['Burkina Faso', [-5.47056494793, 9.61083486576, 2.17710778159, 15.1161577418]],
    'BG': ['Bulgaria', [22.3805257504, 41.2344859889, 28.5580814959, 44.2349230007]],
    'BH': ['Bahrain', [50.3470347746, 25.7659864082, 50.7709381768, 26.3683130773]],
    'BI': ['Burundi', [29.0249263852, -4.49998341229, 30.752262811, -2.34848683025]],
    'BJ': ['Benin', [0.772335646171, 6.14215770103, 3.79711225751, 12.2356358912]],
    'BM': ['Bermuda', [-64.893439, 32.244335, -64.642937, 32.393605]],
    'BN': ['Brunei', [114.204016555, 4.007636827, 115.450710484, 5.44772980389]],
    'BO': ['Bolivia', [-69.5904237535, -22.8729187965, -57.4983711412, -9.76198780685]],
    'BQ': ['Bonaire', [-68.432215, 12.021435, -68.161908, 12.325929]],
    'BR': ['Brazil', [-73.9872354804, -33.7683777809, -34.7299934555, 5.24448639569]],
    'BS': ['Bahamas', [-78.98, 23.71, -77.0, 27.04]],
    'BT': ['Bhutan', [88.8142484883, 26.7194029811, 92.1037117859, 28.2964385035]],
    'BW': ['Botswana', [19.8954577979, -26.8285429827, 29.4321883481, -17.6618156877]],
    'BY': ['Belarus', [23.1994938494, 51.3195034857, 32.6936430193, 56.1691299506]],
    'BZ': ['Belize', [-89.2291216703, 15.8869375676, -88.1068129138, 18.4999822047]],
    'CA': ['Canada', [-140.99778, 41.6751050889, -52.6480987209, 83.23324]],
    'CD': ['Democratic Republic of Congo', [12.1823368669, -13.2572266578, 31.1741492042, 5.25608775474]],
    'CF': ['Central African Republic', [14.4594071794, 2.2676396753, 27.3742261085, 11.1423951278]],
    'CG': ['Congo', [11.0937728207, -5.03798674888, 18.4530652198, 3.72819651938]],
    'CH': ['Switzerland', [6.02260949059, 45.7769477403, 10.4427014502, 47.8308275417]],
    'CI': ['Ivory Coast', [-8.60288021487, 4.33828847902, -2.56218950033, 10.5240607772]],
    'CK': ['Cook Islands', [-159.951493, -22.024598, -157.156169, -18.819687]],
    'CL': ['Chile', [-75.6443953112, -55.61183, -66.95992, -17.5800118954]],
    'CM': ['Cameroon', [8.48881554529, 1.72767263428, 16.0128524106, 12.8593962671]],
    'CN': ['China', [73.6753792663, 18.197700914, 135.026311477, 53.4588044297]],
    'CO': ['Colombia', [-78.9909352282, -4.29818694419, -66.8763258531, 12.4373031682]],
    'CR': ['Costa Rica', [-85.94172543, 8.22502798099, -82.5461962552, 11.2171192489]],
    'CU': ['Cuba', [-84.9749110583, 19.8554808619, -74.1780248685, 23.1886107447]],
    'CV': ['Cape Verde', [-25.455971, 14.706625, -22.497389, 17.224064]],
    'CY': ['Cyprus', [32.2566671079, 34.5718694118, 34.0048808123, 35.1731247015]],
    'CZ': ['Czech Republic', [12.2401111182, 48.5553052842, 18.8531441586, 51.1172677679]],
    'DE': ['Germany', [5.98865807458, 47.3024876979, 15.0169958839, 54.983104153]],
    'DJ': ['Djibouti', [41.66176, 10.9268785669, 43.3178524107, 12.6996385767]],
    'DK': ['Denmark', [8.08997684086, 54.8000145534, 12.6900061378, 57.730016588]],
    'DM': ['Dominica', [-61.470812, 15.208117, -61.235424, 15.647632]],
    'DO': ['Dominican Republic', [-71.9451120673, 17.598564358, -68.3179432848, 19.8849105901]],
    'DZ': ['Algeria', [-8.68439978681, 19.0573642034, 11.9995056495, 37.1183806422]],
    'EC': ['Ecuador', [-80.9677654691, -4.95912851321, -75.2337227037, 1.3809237736]],
    'EE': ['Estonia', [23.3397953631, 57.4745283067, 28.1316992531, 59.6110903998]],
    'EG': ['Egypt', [24.70007, 22.0, 36.86623, 31.58568]],
    'EH': ['Western Sahara', [-17.443494, 20.589817, -8.538591, 27.733945]],
    'ER': ['Eritrea', [36.3231889178, 12.4554157577, 43.0812260272, 17.9983074]],
    'ES': ['Spain', [-9.39288367353, 35.946850084, 3.03948408368, 43.7483377142]],
    'ET': ['Ethiopia', [32.95418, 3.42206, 47.78942, 14.95943]],
    'EU': ['European Union', [-24.689924, 35.716942, 50.678160, 71.093955]],
    'FI': ['Finland', [20.6455928891, 59.846373196, 31.5160921567, 70.1641930203]],
    'FJ': ['Fiji', [-180.0, -18.28799, 180.0, -16.0208822567]],
    'FK': ['Falkland Islands', [-61.2, -52.3, -57.75, -51.1]],
    'FM': ['Micronesia', [151.374752, 6.983693, 152.204961, 7.720989]],
    'FO': ['Faroe Islands', [-7.723461, 61.381658, -6.215588, 62.396159]],
    'FR': ['France', [-5.116257, 42.517756, 9.56001631027, 51.1485061713]],
    'GA': ['Gabon', [8.79799563969, -3.97882659263, 14.4254557634, 2.32675751384]],
    'GB': ['United Kingdom', [-7.57216793459, 49.959999905, 1.68153079591, 58.6350001085]],
    'GD': ['Grenada', [ -61.813504, 11.989115, -61.363392, 12.540112]],
    'GE': ['Georgia', [39.9550085793, 41.0644446885, 46.6379081561, 43.553104153]],
    'GG': ['Guernsey', [-2.680948, 49.413433, -2.149365, 49.735901]],
    'GH': ['Ghana', [-3.24437008301, 4.71046214438, 1.0601216976, 11.0983409693]],
    'GI': ['Gibraltar', [-5.367244, 36.108739, -5.337133, 36.155070]],
    'GL': ['Greenland', [-73.297, 60.03676, -12.20855, 83.64513]],
    'GM': ['Gambia', [-16.8415246241, 13.1302841252, -13.8449633448, 13.8764918075]],
    'GN': ['Guinea', [-15.1303112452, 7.3090373804, -7.83210038902, 12.5861829696]],
    'GP': ['Guadeloupe', [-61.832560, 15.818848, -60.972362, 16.515294]],
    'GQ': ['Equatorial Guinea', [9.3056132341, 1.01011953369, 11.285078973, 2.28386607504]],
    'GR': ['Greece', [20.1500159034, 34.9199876979, 26.6041955909, 41.8269046087]],
    'GS': ['South Georgia and South Sandwich Islands', [-38.298695, -60.327394, -25.181020, -53.917812]],
    'GT': ['Guatemala', [-92.2292486234, 13.7353376327, -88.2250227526, 17.8193260767]],
    'GW': ['Guinea Bissau', [-16.6774519516, 11.0404116887, -13.7004760401, 12.6281700708]],
    'GY': ['Guyana', [-61.4103029039, 1.26808828369, -56.5393857489, 8.36703481692]],
    'HN': ['Honduras', [-89.3533259753, 12.9846857772, -83.147219001, 16.0054057886]],
    'HR': ['Croatia', [13.6569755388, 42.47999136, 19.3904757016, 46.5037509222]],
    'HT': ['Haiti', [-74.4580336168, 18.0309927434, -71.6248732164, 19.9156839055]],
    'HU': ['Hungary', [16.2022982113, 45.7594811061, 22.710531447, 48.6238540716]],
    'ID': ['Indonesia', [95.2930261576, -10.3599874813, 141.03385176, 5.47982086834]],
    'IE': ['Ireland', [-9.97708574059, 51.6693012559, -6.03298539878, 55.1316222195]],
    'IL': ['Israel', [34.2654333839, 29.5013261988, 35.8363969256, 33.2774264593]],
    'IM': ['Isle of Man', [-4.850942, 54.039203, -4.296132, 54.423695]],
    'IN': ['India', [68.1766451354, 7.96553477623, 97.4025614766, 35.4940095078]],
    'IQ': ['Iraq', [38.7923405291, 29.0990251735, 48.5679712258, 37.3852635768]],
    'IR': ['Iran', [44.1092252948, 25.0782370061, 63.3166317076, 39.7130026312]],
    'IS': ['Iceland', [-24.3261840479, 63.4963829617, -13.609732225, 66.5267923041]],
    'IT': ['Italy', [6.7499552751, 36.619987291, 18.4802470232, 47.1153931748]],
    'JE': ['Jersey', [-2.255378, 49.161392, -2.005782, 49.262766]],
    'JM': ['Jamaica', [-78.3377192858, 17.7011162379, -76.1996585761, 18.5242184514]],
    'JO': ['Jordan', [34.9226025734, 29.1974946152, 39.1954683774, 33.3786864284]],
    'JP': ['Japan', [129.408463169, 31.0295791692, 145.543137242, 45.5514834662]],
    'KE': ['Kenya', [33.8935689697, -4.67677, 41.8550830926, 5.506]],
    'KG': ['Kyrgyzstan', [69.464886916, 39.2794632025, 80.2599902689, 43.2983393418]],
    'KH': ['Cambodia', [102.3480994, 10.4865436874, 107.614547968, 14.5705838078]],
    'KI': ['Kiribati', [-157.228370, -5.899120, -154.525674, 2.309838]],
    'KM': ['Comoros', [43.188474, -12.463598, 44.608457, -11.321376]],
    'KN': ['Saint Kitts and Nevis', [-62.870331, 17.093414, -62.527695, 17.431763]],
    'KP': ['North Korea', [124.265624628, 37.669070543, 130.780007359, 42.9853868678]],
    'KR': ['South Korea', [126.117397903, 34.3900458847, 129.468304478, 38.6122429469]],
    'KW': ['Kuwait', [46.5687134133, 28.5260627304, 48.4160941913, 30.0590699326]],
    'KY': ['Cayman Islands', [-81.464856, 19.182946, -79.613660, 19.825009]],
    'KZ': ['Kazakhstan', [46.4664457538, 40.6623245306, 87.3599703308, 55.3852501491]],
    'LA': ['Laos', [100.115987583, 13.88109101, 107.564525181, 22.4647531194]],
    'LB': ['Lebanon', [35.1260526873, 33.0890400254, 36.6117501157, 34.6449140488]],
    'LC': ['St Lucia', [-61.081420, 13.716445, -60.877914, 14.115870]],
    'LI': ['Liechtenstein', [9.455185, 47.046620, 9.629813, 47.275750]],
    'LK': ['Sri Lanka', [79.6951668639, 5.96836985923, 81.7879590189, 9.82407766361]],
    'LR': ['Liberia', [-11.4387794662, 4.35575511313, -7.53971513511, 8.54105520267]],
    'LS': ['Lesotho', [26.9992619158, -30.6451058896, 29.3251664568, -28.6475017229]],
    'LT': ['Lithuania', [21.0558004086, 53.9057022162, 26.5882792498, 56.3725283881]],
    'LU': ['Luxembourg', [5.67405195478, 49.4426671413, 6.24275109216, 50.1280516628]],
    'LV': ['Latvia', [21.0558004086, 55.61510692, 28.1767094256, 57.9701569688]],
    'LY': ['Libya', [9.31941084152, 19.58047, 25.16482, 33.1369957545]],
    'MA': ['Morocco', [-17.0204284327, 21.4207341578, -1.12455115397, 35.7599881048]],
    'MC': ['Monaco', [7.407828, 43.724330, 7.440444, 43.752297]],
    'MD': ['Moldova', [26.6193367856, 45.4882831895, 30.0246586443, 48.4671194525]],
    'ME': ['Montenegro', [18.45, 41.87755, 20.3398, 43.52384]],
    'MF': ['Saint-Martin', [-63.173560, 18.022431, -62.944875, 18.139666]],
    'MG': ['Madagascar', [43.2541870461, -25.6014344215, 50.4765368996, -12.0405567359]],
    'MH': ['Marshall Island', [161.842056, 3.845600, 172.740494, 10.814941]],
    'MK': ['Macedonia', [20.46315, 40.8427269557, 22.9523771502, 42.3202595078]],
    'ML': ['Mali', [-12.1707502914, 10.0963607854, 4.27020999514, 24.9745740829]],
    'MM': ['Myanmar', [92.3032344909, 9.93295990645, 101.180005324, 28.335945136]],
    'MN': ['Mongolia', [87.7512642761, 41.5974095729, 119.772823928, 52.0473660345]],
    'MQ': ['Martinica', [-61.234232, 14.385308, -60.797525, 14.876946]],
    'MR': ['Mauritania', [-17.0634232243, 14.6168342147, -4.92333736817, 27.3957441269]],
    'MS': ['Montserrat', [-62.256975, 16.670934, -62.127199, 16.830380]],
    'MT': ['Malta', [14.166141, 35.815831, 14.590642, 36.081125]],
    'MU': ['Mauritius', [57.246428, -20.527530, 57.867156, -19.769458]],
    'MV': ['Maldives', [72.358411, -0.865774, 74.555676, 6.906712]],
    'MW': ['Malawi', [32.6881653175, -16.8012997372, 35.7719047381, -9.23059905359]],
    'MX': ['Mexico', [-117.12776, 14.5388286402, -86.811982388, 32.72083]],
    'MY': ['Malaysia', [100.085756871, 0.773131415201, 119.181903925, 6.92805288332]],
    'MZ': ['Mozambique', [30.1794812355, -26.7421916643, 40.7754752948, -10.3170960425]],
    'NA': ['Namibia', [11.7341988461, -29.045461928, 25.0844433937, -16.9413428687]],
    'NC': ['New Caledonia', [164.029605748, -22.3999760881, 167.120011428, -20.1056458473]],
    'NE': ['Niger', [0.295646396495, 11.6601671412, 15.9032466977, 23.4716684026]],
    'NG': ['Nigeria', [2.69170169436, 4.24059418377, 14.5771777686, 13.8659239771]],
    'NI': ['Nicaragua', [-87.6684934151, 10.7268390975, -83.147219001, 15.0162671981]],
    'NL': ['Netherlands', [3.31497114423, 50.803721015, 7.09205325687, 53.5104033474]],
    'NO': ['Norway', [4.99207807783, 58.0788841824, 31.29341841, 71.21311908]],
    'NP': ['Nepal', [80.0884245137, 26.3978980576, 88.1748043151, 30.4227169866]],
    'NR': ['Nauru', [166.9007475834, -0.5573764007, 166.9685492693, -0.4984335412]],
    'NU': ['Niue', [-169.954904, -19.160813, -169.762987, -18.948258]],
    'NZ': ['New Zealand', [166.509144322, -46.641235447, 178.517093541, -34.4506617165]],
    'OM': ['Oman', [52.0000098, 16.6510511337, 59.8080603372, 26.3959343531]],
    'PA': ['Panama', [-82.9657830472, 7.2205414901, -77.2425664944, 9.61161001224]],
    'PE': ['Peru', [-81.4109425524, -18.3479753557, -68.6650797187, -0.0572054988649]],
    'PG': ['Papua New Guinea', [141.000210403, -10.6524760881, 156.019965448, -2.50000212973]],
    'PH': ['Philippines', [117.17427453, 5.58100332277, 126.537423944, 18.5052273625]],
    'PK': ['Pakistan', [60.8742484882, 23.6919650335, 77.8374507995, 37.1330309108]],
    'PL': ['Poland', [14.0745211117, 49.0273953314, 24.0299857927, 54.8515359564]],
    'PR': ['Puerto Rico', [-67.2424275377, 17.946553453, -65.5910037909, 18.5206011011]],
    'PS': ['West Bank', [34.9274084816, 31.3534353704, 35.5456653175, 32.5325106878]],
    'PS': ['Palestine', [34.161353, 31.036574, 35.864234, 32.824322]],
    'PT': ['Portugal', [-9.52657060387, 36.838268541, -6.3890876937, 42.280468655]],
    'PY': ['Paraguay', [-62.6850571357, -27.5484990374, -54.2929595608, -19.3427466773]],
    'QA': ['Qatar', [50.7439107603, 24.5563308782, 51.6067004738, 26.1145820175]],
    'RE': ['Reunion', [55.206600, -21.375728, 55.856996, -20.867645]],
    'RO': ['Romania', [20.2201924985, 43.6884447292, 29.62654341, 48.2208812526]],
    'RS': ['Serbia', [18.82982, 42.2452243971, 22.9860185076, 46.1717298447]],
    'RU': ['Russia', [26.822680, 40.483493, 180, 81.903807]],
    'RW': ['Rwanda', [29.0249263852, -2.91785776125, 30.8161348813, -1.13465911215]],
    'SA': ['Saudi Arabia', [34.6323360532, 16.3478913436, 55.6666593769, 32.161008816]],
    'SB': ['Solomon Islands', [156.491357864, -10.8263672828, 162.398645868, -6.59933847415]],
    'SC': ['Seychelles', [55.174998, -4.822535, 56.007276, -3.746368]],
    'SD': ['Sudan', [21.93681, 8.61972971293, 38.4100899595, 22.0]],
    'SE': ['Sweden', [11.0273686052, 55.3617373725, 23.9033785336, 69.1062472602]],
    'SG': ['Singapore', [103.570233, 1.158152, 104.097863, 1.468348]],
    'SH': ['Saint Helena', [-5.8169342584, -16.0372386419, -5.6134693669, -15.8971012947]],
    'SI': ['Slovenia', [13.367471, 45.418064, 16.618664, 46.884908]],
    'SK': ['Slovakia', [16.8799829444, 47.7584288601, 22.5581376482, 49.5715740017]],
    'SL': ['Sierra Leone', [-13.2465502588, 6.78591685631, -10.2300935531, 10.0469839543]],
    'SM': ['San Marino', [12.401383, 43.893395, 12.521954, 43.993838]],
    'SN': ['Senegal', [-17.6250426905, 12.332089952, -11.4678991358, 16.5982636581]],
    'SO': ['Somalia', [40.98105, -1.68325, 51.13387, 12.02464]],
    'SR': ['Suriname', [-58.0446943834, 1.81766714112, -53.9580446031, 6.0252914494]],
    'SS': ['South Sudan', [23.8869795809, 3.50917, 35.2980071182, 12.2480077571]],
    'ST': ['Sao Tome and Principe', [6.372594, -0.065411, 6.790074, 0.439956]],
    'SV': ['El Salvador', [-90.0955545723, 13.1490168319, -87.7235029772, 14.4241327987]],
    'SX': ['Sint Maarten', [-63.160383, 18.009370, -63.003557, 18.063344]],
    'SY': ['Syria', [35.7007979673, 32.312937527, 42.3495910988, 37.2298725449]],
    'SZ': ['Swaziland', [30.6766085141, -27.2858794085, 32.0716654803, -25.660190525]],
    'TC': ['Turks and Caicos Islands', [-72.515351, 21.176436, -71.111847, 21.973323]],
    'TD': ['Chad', [13.5403935076, 7.42192454674, 23.88689, 23.40972]],
    'TF': ['Fr. S. and Antarctic Lands', [68.72, -49.775, 70.56, -48.625]],
    'TG': ['Togo', [-0.0497847151599, 5.92883738853, 1.86524051271, 11.0186817489]],
    'TH': ['Thailand', [97.3758964376, 5.69138418215, 105.589038527, 20.4178496363]],
    'TJ': ['Tajikistan', [67.4422196796, 36.7381712916, 74.9800024759, 40.9602133245]],
    'TK': ['Tokelau', [-172.534264, -9.492260, -171.059350, -8.485807]],
    'TL': ['East Timor', [124.968682489, -9.39317310958, 127.335928176, -8.27334482181]],
    'TM': ['Turkmenistan', [52.5024597512, 35.2706639674, 66.5461503437, 42.7515510117]],
    'TN': ['Tunisia', [7.52448164229, 30.3075560572, 11.4887874691, 37.3499944118]],
    'TO': ['Tonga', [-176.986604, -22.027399, -173.069058, -15.410732]],
    'TR': ['Turkey', [26.0433512713, 35.8215347357, 44.7939896991, 42.1414848903]],
    'TT': ['Trinidad and Tobago', [-61.95, 10.0, -60.895, 10.89]],
    'TV': ['Tuvalu', [175.014362906, -11.134731836, -178.119182207, -5.002830727]],
    'TW': ['Taiwan', [120.106188593, 21.9705713974, 121.951243931, 25.2954588893]],
    'TZ': ['Tanzania', [29.3399975929, -11.7209380022, 40.31659, -0.95]],
    'UA': ['Ukraine', [22.0856083513, 44.3614785833, 40.0807890155, 52.3350745713]],
    'UG': ['Uganda', [29.5794661801, -1.44332244223, 35.03599, 4.24988494736]],
    'US': ['United States', [-168.121185, 18.91619, -66.96466, 71.3577635769]],
    'UY': ['Uruguay', [-58.4270741441, -34.9526465797, -53.209588996, -30.1096863746]],
    'UZ': ['Uzbekistan', [55.9289172707, 37.1449940049, 73.055417108, 45.5868043076]],
    'VA': ['Vatican City', [12.445713,41.900179,12.458437,41.9074918]],
    'VC': ['St Vincent and the Grenadines', [-61.488755, 12.513980, -61.104166, 13.397771]],
    'VE': ['Venezuela', [-73.3049515449, 0.724452215982, -59.7582848782, 12.1623070337]],
    'VG': ['British Virgin Islands', [-64.862530, 18.300936, -64.262402, 18.759272]],
    'VN': ['Vietnam', [102.170435826, 8.59975962975, 109.33526981, 23.3520633001]],
    'VU': ['Vanuatu', [166.629136998, -16.5978496233, 167.844876744, -14.6264970842]],
    'WS': ['Samoa', [-172.850164, -14.081769, -171.309332, -13.404114]],
    'XK': ['Kosovo', [20.023050, 41.851277, 21.791849, 43.271330]],
    'YE': ['Yemen', [42.6048726743, 12.5859504257, 53.1085726255, 19.0000033635]],
    'YT': ['Mayotte', [45.005064, -13.012022, 45.319548, -12.631733]],
    'ZA': ['South Africa', [16.3449768409, -34.8191663551, 32.830120477, -22.0913127581]],
    'ZM': ['Zambia', [21.887842645, -17.9612289364, 33.4856876971, -8.23825652429]],
    'ZW': ['Zimbabwe', [25.2642257016, -22.2716118303, 32.8498608742, -15.5077869605]],
    'WW': ['Worldwide', [-160, -20, 180, 60]]
}