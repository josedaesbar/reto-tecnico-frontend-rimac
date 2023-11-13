import {CoveragesType} from '../core/models/coverage.model'

import IMG_ICON_1 from '../../assets/images/icon-1.png'
import IMG_ICON_2 from '../../assets/images/icon-2.png'
import IMG_ICON_3 from '../../assets/images/icon-3.png'
import {ID_ATROPELLO_VIA_EVITAMIENTO, ID_CHOQUE_LUZ_ROJA, ID_LLANTA_ROBADA} from './constants'

export const CoverageList: CoveragesType[] = [
  {
    title: 'Protege tu auto',
    items: [
      {
        _id: ID_LLANTA_ROBADA,
        title: 'Llanta robada',
        description:
          'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 15,
        icon: IMG_ICON_1,
      },
      {
        _id: ID_CHOQUE_LUZ_ROJA,
        title: 'Choque y/o pasarte la luz roja',
        description:
          'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 20,
        icon: IMG_ICON_2,
      },
      {
        _id: ID_ATROPELLO_VIA_EVITAMIENTO,
        title: 'Atropello en la vía Evitamiento',
        description:
          'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 50,
        icon: IMG_ICON_3,
      },
    ],
  },
  {
    title: 'Protege a los que te rodean',
    items: [
      {
        _id: '4',
        title: 'Test 1',
        description:
          '2. He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 15,
        icon: IMG_ICON_1,
      },
      {
        _id: '5',
        title: 'Test 2',
        description:
          '2. He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 20,
        icon: IMG_ICON_2,
      },
      {
        _id: '6',
        title: 'Test 3',
        description:
          '2. He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 50,
        icon: IMG_ICON_3,
      },
    ],
  },
  {
    title: 'Mejora tu plan',
    items: [
      {
        _id: '7',
        title: 'Test 4',
        description:
          '3. He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 15,
        icon: IMG_ICON_1,
      },
      {
        _id: '9',
        title: 'Test 5',
        description:
          '3. He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 20,
        icon: IMG_ICON_2,
      },
      {
        _id: '9',
        title: 'Test 6',
        description:
          '3. He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más',
        cost: 50,
        icon: IMG_ICON_3,
      },
    ],
  },
]
