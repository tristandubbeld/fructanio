'use client'

import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Fragment, useState } from "react";

const data = [
  {
    category: "Brood, granen, rijst, vervangers",
    items: [
      {
        name: "Aardappelzetmeel",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Amandelmeel",
        green: "48",
        orange: "-",
        red: "-",
      },
      {
        name: "Amarant gepoft",
        green: "10",
        orange: "-",
        red: "30",
      },
      {
        name: "Amarant meel",
        green: "-",
        orange: "-",
        red: "100",
      },
      {
        name: "Boekweitmeel",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Bulgur (gekookt)",
        green: "44",
        orange: "-",
        red: "88",
      },
      {
        name: "Couscous van tarwe (gekookt)",
        green: "-",
        orange: "-",
        red: "77",
      },
      {
        name: "Gerst (korrel)",
        green: "28",
        orange: "-",
        red: "112",
      },
      {
        name: "Gierstmeel",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Havermeel & havermout",
        green: "60",
        orange: "70",
        red: "85",
      },
      {
        name: "Haverzemelen",
        green: "22",
        orange: "-",
        red: "-",
      },
      {
        name: "Tapiocameel",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Tarwemeel",
        green: "-",
        orange: "-",
        red: "100",
      },
      {
        name: "Tarwezemelen",
        green: "5",
        orange: "7",
        red: "10",
      },
      {
        name: "Tarwebrood volkoren, wraps/pita/naan/roti etc.",
        green: "24",
        orange: "35",
        red: "48",
      },
      {
        name: "Teff meel",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Kamut meel",
        green: "-",
        orange: "-",
        red: "-",
      },
      {
        name: "Kokosmeel",
        green: "-",
        orange: "-",
        red: "100",
      },
      {
        name: "Lupinemeel",
        green: "-",
        orange: "-",
        red: "-",
      },
      {
        name: "Maisbrood",
        green: "35",
        orange: "-",
        red: "-",
      },
      {
        name: "Maismeel polenta (ook tortilla/taco)",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Maiszetmeel (maizena)",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Maisvlokken (cornflakes niet glutenvrij)",
        green: "15",
        orange: "-",
        red: "30",
      },
      {
        name: "Panko broodkruim",
        green: "75",
        orange: "105",
        red: "125",
      },
      {
        name: "Rijstmeel / gekookte rijst",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Rijst gepoft (rijstwafel 7 = gram)",
        green: "15",
        orange: "-",
        red: "30",
      },
      {
        name: "Roggemeel",
        green: "-",
        orange: "-",
        red: "100",
      },
      {
        name: "Roggebrood",
        green: "-",
        orange: "-",
        red: "43",
      },
      {
        name: "Sojameel",
        green: "**",
        orange: "-",
        red: "100",
      },
      {
        name: "Speltbrood***",
        green: "70",
        orange: "-",
        red: "-",
      },
      {
        name: "Speltmuesli",
        green: "45",
        orange: "-",
        red: "-",
      },
      {
        name: "Speltmeel gezeefd en producten van spelt",
        green: "100",
        orange: "-",
        red: "-",
      },
      {
        name: "Speltmeel overig en producten van spelt",
        green: "-",
        orange: "-",
        red: "100",
      },
      {
        name: "Spelt eierkoek",
        green: "30",
        orange: "40",
        red: "50",
      },
      {
        name: "Quinoa/meel",
        green: "100",
        orange: "-",
        red: "-",
      },
    ],
  },
  {
    category: "Groenten",
    items: [
      {
        name: "Aardperen / Jeruzalem artisjok",
        green: "-",
        orange: "-",
        red: "75"
      },
      {
        name: "Artisjokhart",
        green: "75",
        orange: "160",
        red: "225"
      },
      {
        name: "Artisjok heel op olie",
        green: "10",
        orange: "15",
        red: "50"
      },
      {
        name: "Artisjok vers",
        green: "15",
        orange: "18",
        red: "75"
      },
      {
        name: "Asperges",
        green: "-",
        orange: "15",
        red: "75"
      },
      {
        name: "Bietjes uit blik/pakje",
        green: "60",
        orange: "120",
        red: "155"
      },
      {
        name: "Bieten vers",
        green: "20",
        orange: "30",
        red: "75"
      },
      {
        name: "Chilipeper",
        green: "28",
        orange: "35",
        red: "-"
      },
      {
        name: "Courgette",
        green: "65",
        orange: "75",
        red: "-"
      },
      {
        name: "Doperwten vers/diepvries",
        green: "15",
        orange: "20",
        red: "75"
      },
      {
        name: "Doperwten uit blik/pot uitgelekt",
        green: "45",
        orange: "55",
        red: "75"
      },
      {
        name: "Knoflookpoeder",
        green: "-",
        orange: "> 1",
        red: "2"
      },
      {
        name: "Knoflook vers",
        green: "-",
        orange: "-",
        red: "3"
      },
      {
        name: "Kool rood",
        green: "75",
        orange: "150",
        red: "180"
      },
      {
        name: "Kool rood (ingemaakt in zuur)",
        green: "75",
        orange: "140",
        red: "-"
      },
      {
        name: "Kool savooien",
        green: "40",
        orange: "55",
        red: "75"
      },
      {
        name: "Kool Chinese",
        green: "75",
        orange: "500",
        red: "-"
      },
      {
        name: "Okra",
        green: "75",
        orange: "90",
        red: "100"
      },
      {
        name: "Peultjes (mange tout)",
        green: "17",
        orange: "25",
        red: "75"
      },
      {
        name: "Prei groene gedeelte",
        green: "55",
        orange: "75",
        red: "85"
      },
      {
        name: "Prei witte gedeelte",
        green: "14",
        orange: "18",
        red: "75"
      },
      {
        name: "Spinazie baby",
        green: "75",
        orange: "150",
        red: "-"
      },
      {
        name: "Spruitjes",
        green: "40",
        orange: "60",
        red: "75"
      },
      {
        name: "Tomaten cherry",
        green: "75",
        orange: "220",
        red: "-"
      },
      {
        name: "Tomaten roma",
        green: "75",
        orange: "250",
        red: "300"
      },
      {
        name: "Uien lente (witte gedeelte)",
        green: "-",
        orange: "-",
        red: "32"
      },
      {
        name: "Uien lente (groene gedeelte)",
        green: "75",
        orange: "-",
        red: "-"
      },
      {
        name: "Uien rood (Spaanse ui)",
        green: "-",
        orange: "-",
        red: "75"
      },
      {
        name: "Uien sjalot",
        green: "-",
        orange: "-",
        red: "6"
      },
      {
        name: "Uien witte",
        green: "-",
        orange: "12",
        red: "75"
      },
      {
        name: "Venkel steeltjes",
        green: "15",
        orange: "85",
        red: "100"
      },
      {
        name: "Venkelknol",
        green: "50",
        orange: "60",
        red: "75"
      },
      {
        name: "Witte champignons",
        green: "37",
        orange: "75",
        red: "-"
      },
      {
        name: "Yam",
        green: "75",
        orange: "300",
        red: "350"
      },
      {
        name: "Zouten, kruidenmixen met ui en knoflook",
        green: "-",
        orange: "-",
        red: "2"
      }
    ]
  },
  {
    category: "Fruit",
    items: [
      {
        name: "Abrikoos vers",
        green: "25",
        orange: "70",
        red: "-"
      },
      {
        name: "Abrikoos gedroogd",
        green: "-",
        orange: "-",
        red: "30"
      },
      {
        name: "Ananas",
        green: "140",
        orange: "200",
        red: "-"
      },
      {
        name: "Ananas gedroogd",
        green: "-",
        orange: "25",
        red: "50"
      },
      {
        name: "Banaan rijp",
        green: "35",
        orange: "45",
        red: "100"
      },
      {
        name: "Bananen chips",
        green: "30",
        orange: "34",
        red: "40"
      },
      {
        name: "Cantaloupe meloen",
        green: "120",
        orange: "150",
        red: "-"
      },
      {
        name: "Cranberries",
        green: "50",
        orange: "135",
        red: "165"
      },
      {
        name: "Cranberries gedroogd",
        green: "15",
        orange: "23",
        red: "30"
      },
      {
        name: "Dadels",
        green: "8",
        orange: "10",
        red: "30"
      },
      {
        name: "Dadels gedroogd met pit",
        green: "8",
        orange: "10",
        red: "30"
      },
      {
        name: "Framboos",
        green: "60",
        orange: "65",
        red: "135"
      },
      {
        name: "Gojibessen gedroogd",
        green: "10",
        orange: "15",
        red: "24"
      },
      {
        name: "Granaatappel",
        green: "45",
        orange: "55",
        red: "87"
      },
      {
        name: "Grapefruit zonder schil",
        green: "80",
        orange: "100",
        red: "207"
      },
      {
        name: "Honingmeloen",
        green: "90",
        orange: "100",
        red: "150"
      },
      {
        name: "Kiwi gold",
        green: "150",
        orange: "195",
        red: "-"
      },
      {
        name: "Kiwi groen",
        green: "150",
        orange: "286",
        red: "-"
      },
      {
        name: "Kokoswater (vruchtvlees + rasp, kokos kan wel)",
        green: "105",
        orange: "158",
        red: "267"
      },
      {
        name: "Lychee",
        green: "48",
        orange: "64",
        red: "96"
      },
      {
        name: "Mango gedroogd",
        green: "-",
        orange: "-",
        red: "20"
      },
      {
        name: "Nectarines",
        green: "25",
        orange: "-",
        red: "150"
      },
      {
        name: "Passievrucht",
        green: "46",
        orange: "100",
        red: "126"
      },
      {
        name: "Pruim",
        green: "10",
        orange: "-",
        red: "66"
      },
      {
        name: "Pruim gedroogd",
        green: "-",
        orange: "-",
        red: "30"
      },
      {
        name: "Rozijnen",
        green: "13",
        orange: "16",
        red: "30"
      },
      {
        name: "Sharon fruit (of kaki)",
        green: "60",
        orange: "65",
        red: "75"
      },
      {
        name: "Vijg gedroogd (bijv. in vijgenbrood)",
        green: "-",
        orange: "-",
        red: "30"
      },
      {
        name: "Watermeloen",
        green: "20",
        orange: "-",
        red: "150"
      },
      {
        name: "Witte perzik",
        green: "20",
        orange: "-",
        red: "145"
      }
    ]
  },
  {
    category: "Peulvruchten",
    items: [
      {
        name: "Bruine bonen",
        green: "40",
        orange: "150",
        red: "-"
      },
      {
        name: "Bonen (black eyed peas)",
        green: "22",
        orange: "-",
        red: "170"
      },
      {
        name: "Canellini bonen",
        green: "76",
        orange: "89",
        red: "100"
      },
      {
        name: "Edamame (sojabonen)",
        green: "90",
        orange: "210",
        red: "-"
      },
      {
        name: "Falafel",
        green: "-",
        orange: "-",
        red: "100"
      },
      {
        name: "Kidney bonen",
        green: "-",
        orange: "-",
        red: "48"
      },
      {
        name: "Lima bonen",
        green: "39",
        orange: "54",
        red: "79"
      },
      {
        name: "Linzen",
        green: "30",
        orange: "90",
        red: "-"
      },
      {
        name: "Miso pasta",
        green: "12",
        orange: "75",
        red: "-"
      },
      {
        name: "Mung bonen",
        green: "49",
        orange: "58",
        red: "73"
      },
      {
        name: "Split erwten",
        green: "-",
        orange: "-",
        red: "45"
      },
      {
        name: "Tofu",
        green: "75",
        orange: "-",
        red: "150"
      },
      {
        name: "Vleesvervangers op sojabasis",
        green: "50",
        orange: "100",
        red: "-"
      },
      {
        name: "Zwarte bonen",
        green: "45",
        orange: "-",
        red: "105"
      },
    ]
  },
  {
    category: "Noten",
    items: [
      {
        name: "Cashewnoten",
        green: "-",
        orange: "15",
        red: "30"
      },
      {
        name: "Pistachenoten",
        green: "11",
        orange: "-",
        red: "23"
      },
    ]
  },
];

const everything = data.flatMap(({ items }) => items);

const fuse = new Fuse(everything, {
  keys: ["name"],
});

interface Fructan {
  name: string;
  green: string;
  orange: string;
  red: string;
}

export const SearchTable = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Fructan[]>();

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);

    const fuseResults = fuse.search(e.target.value).map(({ item }) => item)

    setResults(fuseResults);
  }

  console.log('results', results)

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Product zoeken" onChange={onSearch} />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Naam</TableHead>
            <TableHead className="text-center w-10">🟢</TableHead>
            <TableHead className="text-center w-10">🟠</TableHead>
            <TableHead className="text-center w-10">🔴</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results && query ?
            results.map(({ name, green, orange, red }) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell className="text-center text-green-600">{green}</TableCell>
                <TableCell className="text-center text-orange-500">{orange}</TableCell>
                <TableCell className="text-center text-red-500">{red}</TableCell>
              </TableRow>
            ))
          : data.map(({ category, items }) => (
            <Fragment key={category}>
              <TableRow>
                <TableCell colSpan={4} className="font-bold">
                  {category}
                </TableCell>
              </TableRow>

              {items.map(({ name, green, orange, red }) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell className="text-center text-green-600">{green}</TableCell>
                  <TableCell className="text-center text-orange-500">{orange}</TableCell>
                  <TableCell className="text-center text-red-500">{red}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
