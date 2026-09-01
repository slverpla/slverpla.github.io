import Link from 'next/link';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 mt-10 text-2xl font-semibold text-gray-900">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-gray-600">{children}</p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-4 list-disc space-y-1 pl-6 text-gray-600">{children}</ul>
);

const TermsOfServiceNL = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Plantative Servicevoorwaarden
            </h1>
            <p className="mb-8 text-sm text-gray-500">
              Versie 2.0 &middot; Van kracht vanaf 1 oktober 2026
            </p>

            <div className="prose prose-gray max-w-none">
              <P>
                Deze Servicevoorwaarden (de &rsquo;Voorwaarden&rsquo;) regelen
                je toegang tot en gebruik van de mobiele applicatie Plantative,
                de website plantative.com en de bijbehorende backendservices
                (samen de &rsquo;Diensten&rsquo;). Zij vormen een bindende
                overeenkomst tussen jou en Plantative.
              </P>
              <P>
                Deze Voorwaarden en ons{' '}
                <Link
                  href="/nl/privacy-policy/"
                  className="text-green-700 underline"
                >
                  Privacybeleid
                </Link>{' '}
                vormen samen de &rsquo;Gebruikersovereenkomst&rsquo;. Lees
                artikel 6 (wat Plantative wel en niet is), artikel 8 (naleving
                van de regelgeving inzake planten), artikel 13 (kunstmatige
                intelligentie) en artikel 19 (beperking van aansprakelijkheid)
                bijzonder aandachtig: zij verdelen het risico tussen jou en ons
                en beschrijven risico&rsquo;s die je zelf draagt.
              </P>

              <H2>1. Wie wij zijn en hoe je ons kan bereiken</H2>
              <P>
                De Diensten worden aangeboden door{' '}
                <strong>Sebastiaan Verplancke</strong>, natuurlijke persoon die
                in België een zelfstandige activiteit uitoefent (eenmanszaak) en
                handelt onder de naam <strong>Plantative</strong>{' '}
                (&rsquo;Plantative&rsquo;, &rsquo;wij&rsquo;, &rsquo;ons&rsquo;,
                &rsquo;onze&rsquo;).
              </P>
              <UL>
                <li>Vestigingsadres: Patijntjestraat 87, 9000 Gent, België</li>
                <li>
                  Nummer in de Kruispuntbank van Ondernemingen: 1034.776.796
                </li>
                <li>Btw-identificatienummer: BE 1034.776.796</li>
                <li>E-mail: plantative@gmail.com</li>
              </UL>
              <P>
                Het bovenstaande e-mailadres is tevens ons enige contactpunt in
                de zin van de artikelen 11 en 12 van Verordening (EU) 2022/2065
                (de &rsquo;Digitaledienstenverordening&rsquo;), voor
                communicatie met de autoriteiten van de lidstaten, de Commissie
                en de Europese Raad voor digitale diensten, en voor
                rechtstreekse communicatie met de afnemers van de Diensten.
                Communicatie kan in het Nederlands of in het Engels verlopen.
              </P>

              <H2>2. Toepassingsgebied, aanvaarding en definities</H2>
              <P>
                Door een account aan te maken of door enig onderdeel van de
                Diensten te raadplegen of te gebruiken, bevestig je dat je de
                Gebruikersovereenkomst aanvaardt en ermee instemt eraan gebonden
                te zijn. Aanvaard je die niet, dan mag je de Diensten niet
                gebruiken.
              </P>
              <P>In deze Voorwaarden betekent:</P>
              <UL>
                <li>
                  &rsquo;Inhoud&rsquo;: al het materiaal dat je via de Diensten
                  indient, uploadt, publiceert, verzendt of anderszins
                  beschikbaar stelt, waaronder advertenties, foto&rsquo;s,
                  plantennamen en -beschrijvingen, prijzen, berichten, adressen,
                  beoordelingen, profielgegevens en supportverzoeken;
                </li>
                <li>
                  &rsquo;Advertentie&rsquo;: een door jou gepubliceerd bericht
                  waarin je een plant, stek, zaad of ander plantaardig materiaal
                  te koop, te ruil of gratis aanbiedt, alsook elke
                  &rsquo;gezocht&rsquo;-post die je publiceert;
                </li>
                <li>
                  &rsquo;Bod&rsquo;: een via de Diensten gedaan voorstel van de
                  ene gebruiker aan de andere om plantaardig materiaal te kopen,
                  te verkopen of te ruilen, met inbegrip van elke herziening
                  daarvan;
                </li>
                <li>
                  &rsquo;Transactie&rsquo;: een overeenkomst die tussen twee
                  gebruikers tot stand komt na een aanvaard Bod of een
                  rechtstreekse aankoop, en de uitvoering daarvan;
                </li>
                <li>
                  &rsquo;Doctor&rsquo;: de assistent in de app en de functies
                  voor plantherkenning, diagnose en verzorgingsadvies zoals
                  beschreven in artikel 13;
                </li>
                <li>
                  &rsquo;Premium&rsquo;: een betalend abonnement dat via een
                  appstore wordt aangeboden zoals beschreven in artikel 14;
                </li>
                <li>
                  &rsquo;Consument&rsquo;: een natuurlijke persoon die handelt
                  voor doeleinden die buiten zijn handels-, bedrijfs-, ambachts-
                  of beroepsactiviteit vallen, en &rsquo;Onderneming&rsquo;:
                  elke gebruiker die voor een bepaalde Advertentie of Transactie
                  geen Consument is.
                </li>
              </UL>

              <H2>3. Wijzigingen aan deze Voorwaarden</H2>
              <P>
                Wij kunnen deze Voorwaarden wijzigen om rekening te houden met
                wijzigingen in de Diensten, in onze activiteit of in de
                toepasselijke wetgeving. Bij een wezenlijke wijziging brengen
                wij je ten minste 30 dagen vóór de inwerkingtreding op de hoogte
                via de applicatie of per e-mail. Een wijziging die noodzakelijk
                is om te voldoen aan een wettelijke verplichting, aan een
                rechterlijk of bestuurlijk bevel, of om een beveiligings- of
                veiligheidsrisico te ondervangen, kan onmiddellijk in werking
                treden.
              </P>
              <P>
                Aanvaard je een wijziging niet, dan bestaat je remedie erin het
                gebruik van de Diensten stop te zetten en je account te
                verwijderen vóór de wijziging in werking treedt. Voortgezet
                gebruik van de Diensten na de datum van inwerkingtreding geldt,
                voor zover wettelijk toegestaan, als aanvaarding van de
                gewijzigde Voorwaarden.
              </P>

              <H2>4. Toelatingsvoorwaarden</H2>
              <P>Om de Diensten te gebruiken moet je:</P>
              <UL>
                <li>
                  een natuurlijke persoon zijn, en geen geautomatiseerde agent
                  of bot;
                </li>
                <li>minstens 18 jaar oud zijn;</li>
                <li>
                  handelingsbekwaam zijn om een bindende overeenkomst te sluiten
                  naar het recht van je land van verblijf;
                </li>
                <li>
                  wanneer je optreedt namens een onderneming of een andere
                  organisatie, bevoegd zijn om die te verbinden, in welk geval
                  &rsquo;je&rsquo; zowel op jou als op die organisatie slaat;
                </li>
                <li>
                  niet het voorwerp uitmaken van toepasselijke handels- of
                  economische sancties, en je niet bevinden in een gebied waarop
                  omvattende sancties van toepassing zijn; en
                </li>
                <li>
                  niet eerder een account hebben gehad dat wij hebben beëindigd
                  wegens schending van de Gebruikersovereenkomst, tenzij wij
                  daar uitdrukkelijk en schriftelijk mee instemmen.
                </li>
              </UL>
              <P>
                Wij kunnen op elk moment een redelijk bewijs van je leeftijd,
                identiteit of vertegenwoordigingsbevoegdheid vragen en de
                toegang opschorten in afwachting daarvan. De Diensten zijn niet
                gericht op personen jonger dan 18 jaar. Stellen wij vast dat een
                persoon jonger dan 18 jaar een account heeft, dan sluiten wij
                dat account.
              </P>

              <H2>5. Je account</H2>
              <P>
                Je moet correcte en volledige registratiegegevens verstrekken en
                die actueel houden. Je bent verantwoordelijk voor het geheim
                houden van je inloggegevens en voor alle activiteit onder je
                account, en je moet ons zonder onnodige vertraging via
                plantative@gmail.com op de hoogte brengen van elk vermoeden van
                ongeoorloofd gebruik. Je mag zonder onze toestemming niet meer
                dan één account aanhouden, en je mag je account, gebruikersnaam,
                reputatie of beoordelingen niet verkopen, verhuren, uitlenen of
                anderszins overdragen.
              </P>

              <H2>6. Wat Plantative is &mdash; en wat het niet is</H2>
              <P>
                Plantative is een dienst van de informatiemaatschappij die een
                omgeving aanbiedt waarin gebruikers Advertenties kunnen
                publiceren, met elkaar kunnen communiceren, over Boden kunnen
                onderhandelen, Transacties kunnen registreren en rechtstreeks
                onderling plantaardig materiaal kunnen uitwisselen. Door die
                omgeving aan te bieden treden wij op als aanbieder van
                hostingdiensten in de zin van de artikelen 4 tot en met 6 van de
                Digitaledienstenverordening en van boek XII WER, doordat wij op
                verzoek van gebruikers door hen verstrekte informatie opslaan.
              </P>
              <P>
                <strong>
                  Wij zijn geen partij bij enige Transactie. Wij zijn niet de
                  verkoper, koper, leverancier, invoerder, uitvoerder, verdeler,
                  groothandelaar, kleinhandelaar, veilinghouder, makelaar,
                  agent, escrow-agent, vervoerder, expediteur,
                  betalingsdienstaanbieder of verzekeraar met betrekking tot
                  enige plant, enig plantaardig materiaal of enig ander via de
                  Diensten aangeboden goed.
                </strong>
              </P>
              <P>Het volgende geldt zonder uitzondering:</P>
              <UL>
                <li>
                  wij nemen nooit het bezit, de bewaring of de controle over
                  enige via de Diensten aangeboden plant of enig ander goed;
                </li>
                <li>
                  wij inspecteren, testen, onderzoeken, authenticeren, taxeren,
                  determineren, certificeren of verifiëren geen enkele plant,
                  Advertentie, foto, beschrijving, soortnaam, prijs, toestand,
                  herkomst, vergunning, fytosanitair document of
                  gebruikersidentiteit;
                </li>
                <li>
                  er wordt door ons geen betaling verwerkt, gehouden, in escrow
                  geplaatst, gewaarborgd of doorgestort in het kader van een
                  Transactie. Betaling en levering worden rechtstreeks tussen de
                  betrokken gebruikers geregeld, buiten de Diensten om, op eigen
                  risico;
                </li>
                <li>
                  elke overeenkomst die voortvloeit uit een aanvaard Bod of een
                  rechtstreekse aankoop komt uitsluitend tot stand tussen de
                  betrokken gebruikers. Alle rechten en rechtsmiddelen die
                  daaruit voortvloeien, waaronder elk herroepingsrecht, elke
                  wettelijke of commerciële conformiteitsgarantie, elk recht op
                  terugbetaling, vervanging of herstel en elke vordering tot
                  schadevergoeding, gelden ten aanzien van de tegenpartij en
                  niet ten aanzien van ons;
                </li>
                <li>
                  niets van wat via de Diensten wordt weergegeven vormt een
                  aanbod, uitnodiging, aanbeveling, goedkeuring, verklaring of
                  garantie van onzentwege met betrekking tot enige gebruiker,
                  plant of Advertentie; en
                </li>
                <li>
                  wanneer de Diensten de stand van een Transactie weergeven
                  &mdash; met inbegrip van de aanvaarding van een Bod, de
                  bevestiging van ontvangst, de terugkeer van een plant of het
                  achterlaten van een beoordeling &mdash; is die weergave een
                  registratie van wat gebruikers ons hebben meegedeeld. Zij
                  vormt geen verificatie, bevestiging, escrow, certificering of
                  garantie van onzentwege dat een gebeurtenis daadwerkelijk
                  heeft plaatsgevonden, dat een betaling is verricht, of dat een
                  goed is geleverd dan wel conform de beschrijving was.
                </li>
              </UL>
              <P>
                Overeenkomstig artikel 8 van de Digitaledienstenverordening rust
                op ons geen algemene verplichting om toe te zien op de
                informatie die wij doorgeven of opslaan, noch om actief te
                zoeken naar feiten of omstandigheden die op onwettige
                activiteiten duiden. Niets in deze Voorwaarden, en geen enkel
                eigener beweging verricht onderzoek of moderatie, kan worden
                uitgelegd als het verschaffen van daadwerkelijke kennis of besef
                van specifieke illegale inhoud of activiteiten.
              </P>

              <H2>7. Advertenties, Boden en Transacties</H2>
              <H3>7.1 Een Advertentie publiceren</H3>
              <P>
                Wanneer je een Advertentie publiceert, verklaar en garandeer je,
                telkens opnieuw en zolang de Advertentie online blijft, dat:
              </P>
              <UL>
                <li>
                  je eigenaar bent van het plantaardig materiaal of anderszins
                  rechtmatig bevoegd bent erover te beschikken, en dat het vrij
                  is van elk recht van derden dat de overdracht ervan zou
                  verhinderen;
                </li>
                <li>
                  de Advertentie juist, volledig en niet misleidend is, in het
                  bijzonder wat betreft soort, cultivar, grootte, leeftijd,
                  toestand, gezondheid, aanwezigheid van plagen en ziekten,
                  vermeerderingswijze, herkomst en prijs;
                </li>
                <li>
                  de foto&rsquo;s het werkelijk aangeboden plantaardig materiaal
                  tonen, dat je gerechtigd bent ze te publiceren, en dat ze niet
                  zijn bewerkt op een wijze die een verkeerde voorstelling van
                  het goed geeft; en
                </li>
                <li>de Advertentie volledig voldoet aan artikel 8.</li>
              </UL>
              <H3>7.2 Boden en totstandkoming van een Transactie</H3>
              <P>
                Een Bod kan worden herzien, geweigerd of ingetrokken
                overeenkomstig de functionaliteit van de Diensten. Wanneer beide
                partijen een Bod aanvaarden, of wanneer een koper een
                rechtstreekse aankoop voltooit van een Advertentie die dat
                toelaat, komt tussen die gebruikers een overeenkomst tot stand.
                De inhoud, geldigheid, uitvoering en gevolgen van die
                overeenkomst zijn een aangelegenheid tussen hen en worden
                beheerst door het tussen hen toepasselijke recht; wij zijn
                daarbij geen partij en nemen daarover geen standpunt in.
              </P>
              <H3>7.3 Betaling, levering en risico</H3>
              <P>
                De partijen bij een Transactie bepalen zelf de wijze, het
                tijdstip en de plaats van betaling en van levering, afhaling of
                verzending. Je bent als enige verantwoordelijk voor de keuze van
                je tegenpartij, voor de gebruikte betalingsmethode, voor
                verpakking, etikettering, verzekering en vervoer, voor de
                naleving van de voorwaarden van de vervoerder, en voor het
                dragen van het risico van verlies, beschadiging, vertraging,
                achteruitgang of afsterven van plantaardig materiaal tijdens
                vervoer of opslag.
              </P>
              <P>
                <strong>
                  Aangezien er via de Diensten geen betalingen verlopen, kunnen
                  wij een betaling tussen gebruikers niet terugdraaien,
                  terugbetalen, recupereren, tegenhouden of daarin tussenkomen,
                  en bieden wij geen kopersbescherming, verkopersbescherming,
                  garantie, escrow, verzekering of geschillenbeslechting van
                  welke aard ook.
                </strong>{' '}
                Gebruikers die transacties sluiten zonder elkaar persoonlijk te
                ontmoeten, doen dat op eigen risico. Wij raden je met klem aan
                een betalingsmethode te gebruiken die je een zelfstandig
                verhaalsrecht tegen je betalingsdienstaanbieder biedt.
              </P>
              <H3>7.4 Adressen delen en persoonlijke ontmoetingen</H3>
              <P>
                De Diensten laten je toe een adres in een chat naar een andere
                gebruiker te sturen en een adres te registreren bij de
                bevestiging van ontvangst. Of je een adres bekendmaakt, en aan
                wie, is volledig jouw beslissing. Eenmaal bekendgemaakt bevindt
                die informatie zich bij de ontvanger en kunnen wij ze niet
                terugroepen of controleren.
              </P>
              <P>
                <strong>
                  Kies je ervoor een andere gebruiker persoonlijk te ontmoeten,
                  dan doe je dat volledig op eigen risico. Wij screenen,
                  controleren of verifiëren geen enkele gebruiker en voeren geen
                  antecedentenonderzoek uit. Neem dezelfde voorzorgen als bij
                  elke onbekende: spreek af op een openbare plaats, laat iemand
                  weten waar je naartoe gaat, en laat geen onbekende bij je
                  thuis binnen.
                </strong>
              </P>
              <H3>
                7.5 Onze bevoegdheid over Advertenties en Transactiegegevens
              </H3>
              <P>
                Wij kunnen op elk moment een Advertentie of een
                Transactieregistratie verwijderen, verbergen, lager
                rangschikken, qua opmaak aanpassen, weigeren te publiceren of de
                toegang ertoe beperken, en een Transactieregistratie op de
                Diensten annuleren, overeenkomstig artikel 12. Dit is
                uitsluitend een maatregel binnen de Diensten. Zij vernietigt,
                wijzigt of ontbindt geen enkele tussen gebruikers gesloten
                overeenkomst en raakt die niet, en zij maakt ons geen partij
                bij, noch scheidsrechter van, enig geschil tussen hen.
              </P>

              <H2>8. Naleving van de regelgeving inzake planten</H2>
              <P>
                De handel in planten en plantaardig materiaal is sterk
                gereglementeerd. Je bent als enige verantwoordelijk om ervoor te
                zorgen dat elke Advertentie die je publiceert en elke Transactie
                die je sluit voldoet aan alle wet- en regelgeving die van
                toepassing is op jou, op je tegenpartij en op de verplaatsing
                van het materiaal tussen jullie. Je verklaart en garandeert
                telkens opnieuw dat dit het geval is.
              </P>
              <P>Dit omvat, zonder beperking en voor zover van toepassing:</P>
              <UL>
                <li>
                  Verordening (EG) nr. 338/97 inzake de bescherming van in het
                  wild levende dier- en plantensoorten door controle op het
                  desbetreffende handelsverkeer, en Verordening (EG) nr.
                  865/2006, ter uitvoering van de CITES-Overeenkomst. Talrijke
                  courant verhandelde sierplanten zijn opgenomen, waaronder vele
                  cactussen, orchideeën, cycadeeën, vetplanten, Euphorbia, Aloe,
                  Dionaea, Nepenthes en Sarracenia. Voor de verkoop, het te koop
                  aanbieden, de aankoop, de verwerving voor commerciële
                  doeleinden en de verplaatsing van opgenomen specimens kunnen
                  vergunningen of certificaten vereist zijn;
                </li>
                <li>
                  Verordening (EU) nr. 1143/2014 betreffende invasieve uitheemse
                  soorten en Uitvoeringsverordening (EU) 2016/1141 tot
                  vaststelling van de Unielijst, samen met de Vlaamse, Waalse en
                  Brusselse regelgeving en de gelijkwaardige regels in andere
                  lidstaten, die het houden, kweken, vervoeren, in de handel
                  brengen, gebruiken en uitwisselen van opgenomen soorten
                  verbieden;
                </li>
                <li>
                  Verordening (EU) 2016/2031 betreffende beschermende
                  maatregelen tegen plaagorganismen bij planten en
                  Uitvoeringsverordening (EU) 2019/2072, met inbegrip van de
                  verplichting dat een plantenpaspoort planten voor opplant
                  vergezelt die binnen de Unie worden verplaatst, wat ook geldt
                  voor verkoop op afstand aan eindgebruikers, alsook de
                  verplichting om in bepaalde gevallen geregistreerd te zijn als
                  professionele marktdeelnemer en gemachtigd te zijn om
                  plantenpaspoorten af te geven;
                </li>
                <li>
                  de vereisten inzake fytosanitaire certificaten, douane, invoer
                  en uitvoer voor elke verplaatsing van of naar de Unie;
                </li>
                <li>
                  de Europese en nationale regels inzake het in de handel
                  brengen van zaaizaad en teeltmateriaal, en inzake
                  kwekersrechten krachtens Verordening (EG) nr. 2100/94, met
                  inbegrip van het verbod om beschermde rassen te vermeerderen
                  en te verkopen zonder toestemming van de houder;
                </li>
                <li>
                  de soortenbescherming krachtens Richtlijn 92/43/EEG en de
                  gewestelijke natuurbehoudswetgeving, met inbegrip van verboden
                  op het plukken of opgraven van planten in het wild;
                </li>
                <li>
                  de wet van 24 februari 1921 betreffende het verhandelen van
                  giftstoffen, slaapmiddelen en verdovende middelen, psychotrope
                  stoffen, ontsmettingsstoffen en antiseptica en de
                  uitvoeringsbesluiten ervan, alsook gelijkwaardige wetgeving
                  elders, met betrekking tot elke plant of elk plantaardig
                  materiaal dat een gecontroleerde stof bevat; en
                </li>
                <li>
                  alle toepasselijke fiscale, btw-, douane- en
                  rapporteringsverplichtingen die uit je activiteit
                  voortvloeien.
                </li>
              </UL>
              <P>
                Je mag geen Advertentie publiceren voor, en niet handelen in,
                enige plant of enig plantaardig materiaal dat je niet rechtmatig
                mag bezitten, vermeerderen, vervoeren, aanbieden of overdragen,
                of waarvoor je de wettelijk vereiste documenten niet kan
                voorleggen.
              </P>
              <H3>8.1 Giftigheid, eetbaarheid en gezondheidsclaims</H3>
              <P>
                <strong>
                  Veel sierplanten en wilde planten zijn giftig voor mensen of
                  dieren, door inname, door contact met het sap of door
                  inademing van rook of pollen, en sommige zijn dodelijk in
                  kleine hoeveelheden.
                </strong>{' '}
                Je mag een plant niet omschrijven als eetbaar, geneeskrachtig,
                therapeutisch, psychoactief, veilig voor kinderen of veilig voor
                dieren tenzij die omschrijving juist en rechtmatig is, en je mag
                geen gezondheidsclaim maken die verboden is door Verordening
                (EG) nr. 1924/2006 inzake voedings- en gezondheidsclaims. Je
                moet elke giftigheid waarvan je op de hoogte bent, vermelden.
                Wij controleren dergelijke verklaringen niet en aanvaarden
                daarvoor geen enkele verantwoordelijkheid.
              </P>
              <H3>8.2 Geen verificatie en geen advies</H3>
              <P>
                Wij voeren geen enkele controle uit, en zijn daartoe ook niet
                verplicht, op de regelgevende status van een plant, op een
                vergunning, certificaat of plantenpaspoort, of op de registratie
                van een gebruiker als professionele marktdeelnemer. Niets in de
                Diensten vormt juridisch, regelgevend, douane-, fytosanitair,
                veterinair, medisch of fiscaal advies. Twijfel je over de
                rechtmatigheid van een Advertentie of een Transactie, win dan
                onafhankelijk professioneel advies in of neem contact op met de
                bevoegde overheid vooraleer je verder gaat.
              </P>

              <H2>9. Ondernemingen, professionele gebruikers en belastingen</H2>
              <P>
                Gebruik je de Diensten voor doeleinden die verband houden met je
                handels-, bedrijfs-, ambachts- of beroepsactiviteit, dan ben je
                een Onderneming. Je moet ons dat op verzoek meedelen, je als
                onderneming kenbaar maken aan je tegenpartijen, en de
                verplichtingen naleven die het consumentenrecht je oplegt, met
                inbegrip van de precontractuele informatieverplichtingen, het
                herroepingsrecht en de wettelijke conformiteitsgarantie
                krachtens boek VI WER en het gelijkwaardige recht van het land
                van je tegenpartij.
              </P>
              <P>
                Wij kwalificeren momenteel als micro- of kleine onderneming in
                de zin van Aanbeveling 2003/361/EG en zijn daarom door artikel
                29 van de Digitaledienstenverordening uitgesloten van afdeling 4
                van hoofdstuk III van die verordening. Wij behouden ons
                niettemin het recht voor om van elke Onderneming de in artikel
                30 van de Digitaledienstenverordening opgesomde informatie te
                vragen, en om de verlening van de Diensten op te schorten aan
                een Onderneming die nalaat die te verstrekken of te corrigeren.
              </P>
              <P>
                Je bent als enige verantwoordelijk voor het bepalen, aangeven en
                betalen van elke belasting, btw, sociale bijdrage of heffing die
                uit je activiteit via de Diensten voortvloeit. Wanneer wij
                daartoe verplicht zijn krachtens Richtlijn 2011/16/EU, zoals
                gewijzigd bij Richtlijn (EU) 2021/514, of krachtens een
                gelijkwaardige verplichting, kunnen wij bij jou informatie over
                jou en je activiteit inzamelen en aan de bevoegde
                belastingautoriteit rapporteren, waaronder je naam, adres,
                geboortedatum, fiscaal identificatienummer en de voor je
                Transacties geregistreerde tegenprestatie. Je moet die
                informatie op verzoek onverwijld verstrekken, en wij kunnen je
                account opschorten tot je dat doet.
              </P>

              <H2>10. Jouw Inhoud</H2>
              <H3>10.1 Eigendom en licentie</H3>
              <P>
                Je behoudt alle rechten die je op je Inhoud hebt. Wij maken
                daarop geen enkele eigendomsaanspraak.
              </P>
              <P>
                Door Inhoud via de Diensten beschikbaar te stellen, verleen je
                ons een wereldwijde, niet-exclusieve, royaltyvrije,
                overdraagbare en sublicentieerbare licentie om die Inhoud te
                hosten, op te slaan, te cachen, te reproduceren, te herschalen,
                te hercoderen, aan te passen, te vertalen, te indexeren, op te
                maken, te publiceren, aan het publiek mee te delen en weer te
                geven, en om er afgeleide technische representaties van te
                maken, met het oog op de exploitatie, de levering, de
                beveiliging, de analyse en de verbetering van de Diensten en op
                de promotie van de Diensten. De licentie omvat het recht om
                sublicenties te verlenen aan onze aanbieders van hosting,
                opslag, contentlevering, zoekfunctionaliteit, vertaling en
                kunstmatige intelligentie, uitsluitend voor die doeleinden.
              </P>
              <P>
                De licentie geldt zolang de Inhoud op de Diensten staat en
                nadien enkel voor de beperkte periode die nodig is om de
                gebruikelijke back-up- en logrotatiecycli te voltooien en om te
                voldoen aan een wettelijke verplichting of om rechtsvorderingen
                in te stellen, uit te oefenen of te onderbouwen. Voor zover
                toegestaan door artikel XI.165 WER, ga je ermee akkoord je
                morele rechten niet uit te oefenen op een wijze die de normale
                uitoefening van deze licentie zou verhinderen.
              </P>
              <H3>10.2 Jouw garanties</H3>
              <P>
                Je verklaart en garandeert dat je over alle rechten beschikt die
                nodig zijn om de licentie uit artikel 10.1 te verlenen, dat je
                Inhoud geen recht van derden schendt, en dat de publicatie ervan
                geen wet of geheimhoudingsplicht schendt. Bevat je Inhoud
                persoonsgegevens van een andere persoon, dan moet je over een
                rechtsgrond beschikken om die beschikbaar te stellen, en treed
                je daarvoor op als zelfstandige verwerkingsverantwoordelijke.
              </P>
              <H3>10.3 Beoordelingen en reputatie</H3>
              <P>
                Een beoordeling mag enkel worden ingediend door een partij bij
                de Transactie waarop zij betrekking heeft, en moet de werkelijke
                ervaring van die partij weergeven. Beoordelingen die verzonnen,
                gekocht, aangemoedigd, in ruil voor een tegenprestatie of namens
                een andere persoon zijn ingediend, zijn verboden en vormen een
                misleidende handelspraktijk in de zin van artikel VI.100 WER.
                Wij geven beoordelingen weer zoals zij worden ingediend,
                behoudens artikel 12; een beoordeling is de verklaring van haar
                auteur en geen verklaring van onzentwege, en wij verifiëren de
                juistheid ervan niet. Wij kunnen een beoordeling verwijderen die
                deze Voorwaarden schendt en een samengestelde score
                dienovereenkomstig herberekenen.
              </P>
              <H3>10.4 Feedback</H3>
              <P>
                Stuur je ons suggesties, ideeën of feedback over de Diensten,
                dan mogen wij die zonder beperking gebruiken, zonder
                geheimhoudingsplicht en zonder enige vergoeding aan jou.
              </P>

              <H2>11. Verboden gedrag</H2>
              <P>Je mag niet, en mag niemand toelaten om:</P>
              <UL>
                <li>
                  inhoud te publiceren, te verzenden of op te slaan die onwettig
                  is of die een intellectueel eigendomsrecht, een
                  persoonlijkheidsrecht of een recht op privacy schendt;
                </li>
                <li>
                  planten of goederen aan te bieden of te verhandelen in strijd
                  met artikel 8, of namaakgoederen, gestolen of onrechtmatig
                  verkregen goederen;
                </li>
                <li>
                  jezelf, je Advertenties, je reputatie, je locatie of je band
                  met anderen verkeerd voor te stellen, je uit te geven voor een
                  andere persoon of organisatie, of het account van een ander te
                  gebruiken;
                </li>
                <li>
                  je in te laten met frauduleuze, bedrieglijke, manipulatieve of
                  agressieve handelspraktijken, waaronder lokadvertenties,
                  prijsmanipulatie, opdrijven van biedingen, voorschotfraude en
                  verzoeken tot betaling via onomkeerbare methodes op valse
                  gronden;
                </li>
                <li>
                  een persoon lastig te vallen, te bedreigen, te belagen, te
                  belasteren, of aan te zetten tot geweld of haat, of inhoud te
                  publiceren die discriminerend, seksueel expliciet of
                  anderszins beledigend is;
                </li>
                <li>
                  persoonsgegevens van een ander te publiceren zonder
                  rechtsgrond, waaronder adressen, contactgegevens, foto&rsquo;s
                  of chatberichten;
                </li>
                <li>
                  ongevraagde commerciële communicatie, kettingberichten of spam
                  te versturen, of de Diensten te gebruiken om goederen of
                  diensten aan te prijzen die geen verband houden met planten;
                </li>
                <li>
                  gegevens van de Diensten te scrapen, te crawlen, te oogsten,
                  te indexeren of systematisch te extraheren, of de Diensten te
                  benaderen met een robot, spider of ander geautomatiseerd
                  middel, behalve met onze uitdrukkelijke schriftelijke
                  toestemming;
                </li>
                <li>
                  de applicatie te reverse-engineeren, te decompileren of te
                  disassembleren behalve voor zover de wet dat uitdrukkelijk
                  toestaat, App Check, snelheidslimieten, gebruiksquota,
                  geografische beperkingen of enige andere technische
                  beschermingsmaatregel te omzeilen, of afgeleide applicaties of
                  niet-toegestane clients te maken;
                </li>
                <li>
                  malware te introduceren, de Diensten of hun infrastructuur te
                  verstoren of onredelijk te belasten, of te pogen ongeoorloofde
                  toegang te krijgen tot een account, systeem of gegevens;
                </li>
                <li>
                  de Doctor of een andere geautomatiseerde functie te gebruiken
                  om onwettige inhoud te genereren, om de beveiligingen ervan te
                  omzeilen, om instructies te verkrijgen voor de extractie of
                  bereiding van gecontroleerde of giftige stoffen, of om
                  persoonsgegevens van een ander onrechtmatig te verwerken;
                </li>
                <li>
                  een nieuw account aan te maken, of een ander account te
                  gebruiken, om een opschorting of beëindiging te omzeilen; of
                </li>
                <li>
                  de Diensten te gebruiken in strijd met toepasselijke
                  exportcontrole- of sanctiewetgeving.
                </li>
              </UL>

              <H2>12. Moderatie van inhoud, meldingen en klachten</H2>
              <P>
                Dit artikel beschrijft de beperkingen die wij aan het gebruik
                van de Diensten opleggen en het beleid, de procedures en de
                middelen die wij voor inhoudsmoderatie hanteren, zoals vereist
                door artikel 14 van de Digitaledienstenverordening.
              </P>
              <H3>12.1 Inhoud melden</H3>
              <P>
                Iedereen kan ons inhoud melden die hij illegaal acht of in
                strijd met deze Voorwaarden, via de meldfunctie in de applicatie
                of via plantative@gmail.com. Om ons toe te laten de melding
                zorgvuldig te beoordelen, vermeld je best een voldoende
                onderbouwde uitleg waarom de inhoud onwettig of in strijd is, de
                exacte vindplaats van de inhoud zoals de betrokken advertentie,
                het profiel of het bericht, je naam en e-mailadres tenzij de
                melding een strafbaar feit betreft als bedoeld in de artikelen 3
                tot en met 7 van Richtlijn 2011/93/EU, en een verklaring dat je
                te goeder trouw meent dat de informatie in de melding juist en
                volledig is.
              </P>
              <P>
                Wij bevestigen de ontvangst van een melding zonder onnodige
                vertraging wanneer contactgegevens zijn verstrekt, behandelen
                meldingen tijdig, zorgvuldig, niet-willekeurig en objectief, en
                stellen de melder in kennis van onze beslissing en van de
                beschikbare beroepsmogelijkheden.
              </P>
              <H3>12.2 Hoe wij modereren</H3>
              <P>
                Inhoud wordt hoofdzakelijk beoordeeld naar aanleiding van
                meldingen. Daarnaast kunnen wij geautomatiseerde middelen
                inzetten om duplicaten, spam, misbruik of kennelijk
                niet-conforme inhoud op te sporen, en kunnen wij handelen op
                basis van informatie van autoriteiten of derden. Beslissingen om
                een Advertentie, een account of een beoordeling te beperken
                worden door een mens genomen of bevestigd. Wij voeren geen
                algemeen toezicht uit op de Diensten.
              </P>
              <P>
                Stellen wij vast dat inhoud of gedrag onwettig is of de
                Gebruikersovereenkomst schendt, dan kunnen wij een of meer van
                de volgende maatregelen nemen, in verhouding tot de ernst, de
                frequentie en de gevolgen van de inbreuk en tot de vraag of zij
                herhaald wordt: de inhoud verwijderen of de toegang ertoe
                onmogelijk maken; de zichtbaarheid ervan beperken of ze lager
                rangschikken; de verlening van de Diensten geheel of
                gedeeltelijk opschorten of beëindigen; het account opschorten of
                beëindigen; en de toegang tot Premiumfuncties opschorten,
                behoudens artikel 14.
              </P>
              <P>
                Leggen wij een dergelijke maatregel op, dan brengen wij je
                daarvan op de hoogte en geven wij je een motivering
                overeenkomstig artikel 17 van de Digitaledienstenverordening,
                met vermelding van de feiten en omstandigheden waarop wij ons
                baseren, of geautomatiseerde middelen zijn gebruikt, de
                contractuele of wettelijke grond waarop wij ons baseren, en de
                beroepsmogelijkheden waarover je beschikt.
              </P>
              <H3>12.3 Klacht tegen een beslissing</H3>
              <P>
                Ben je het niet eens met een beslissing die wij hebben genomen,
                dan kan je binnen zes maanden na de kennisgeving ervan een
                klacht indienen via plantative@gmail.com. Klachten worden door
                een mens onderzocht en wij draaien een beslissing zonder
                onnodige vertraging terug wanneer uit de klacht blijkt dat de
                inhoud niet onwettig of niet in strijd was, of dat zij de
                genomen maatregel niet rechtvaardigt. Deze procedure komt
                bovenop, en beperkt niet, elk gerechtelijk rechtsmiddel waarover
                je beschikt of je recht om je te wenden tot het Belgisch
                Instituut voor postdiensten en telecommunicatie als coördinator
                voor digitale diensten.
              </P>
              <H3>12.4 Misbruik</H3>
              <P>
                Na een voorafgaande waarschuwing kunnen wij voor een redelijke
                termijn het account opschorten van een gebruiker die vaak
                kennelijk illegale inhoud publiceert, alsook de behandeling van
                meldingen en klachten van een persoon die vaak kennelijk
                ongegronde meldingen of klachten indient.
              </P>
              <H3>12.5 Vermoeden van een strafbaar feit</H3>
              <P>
                Wanneer wij kennis krijgen van informatie die aanleiding geeft
                tot een vermoeden dat een strafbaar feit met een bedreiging voor
                het leven of de veiligheid van een persoon heeft plaatsgevonden,
                plaatsvindt of waarschijnlijk zal plaatsvinden, brengen wij de
                bevoegde rechtshandhavings- of gerechtelijke autoriteiten
                daarvan op de hoogte overeenkomstig artikel 18 van de
                Digitaledienstenverordening.
              </P>

              <H2>13. Plantherkenning en de Plantative Doctor</H2>
              <P>
                De Diensten omvatten geautomatiseerde functies die planten
                herkennen op basis van foto&rsquo;s, diagnoses voorstellen en
                verzorgingsadvies en conversationele antwoorden genereren. Deze
                functies steunen op diensten van derden voor kunstmatige
                intelligentie en plantherkenning, zoals beschreven in artikel 5
                van ons{' '}
                <Link
                  href="/nl/privacy-policy/"
                  className="text-green-700 underline"
                >
                  Privacybeleid
                </Link>
                . Het aantal herkenningen en assistentgesprekken dat voor jou
                beschikbaar is, kan per abonnement en per dag beperkt zijn.
              </P>
              <P>
                <strong>
                  De uitvoer van deze functies is informatief en
                  probabilistisch. Zij vormt geen professioneel tuinbouwkundig,
                  landbouwkundig, botanisch, veterinair, medisch,
                  voedingskundig, juridisch, douane- of regelgevend advies, en
                  zij kan onvolledig, verouderd of onjuist zijn, ook wat betreft
                  soortbepaling, giftigheid en eetbaarheid. Herkenningen zijn
                  geregeld verkeerd, en nauw verwante soorten verschillen
                  radicaal in giftigheid en in juridisch statuut.
                </strong>
              </P>
              <P>
                Je moet elke herkenning of elk advies zelfstandig verifiëren
                vooraleer je erop handelt, en in het bijzonder vooraleer je een
                plant inneemt of op de huid aanbrengt, vooraleer je een persoon,
                een kind of een dier eraan blootstelt, vooraleer je een
                behandeling of chemisch middel toedient, en vooraleer je een
                plant invoert, uitvoert, vermeerdert, verhandelt of verwijdert
                die beschermd, invasief, gecontroleerd of anderszins
                gereglementeerd kan zijn. Je mag niet op deze functies steunen
                om de naleving van artikel 8 vast te stellen. Voor zover
                wettelijk toegestaan, sluiten wij elke aansprakelijkheid uit
                voor verlies of schade die voortvloeit uit het vertrouwen op die
                uitvoer.
              </P>
              <P>
                Deze functies zijn afhankelijk van diensten van derden en kunnen
                worden gewijzigd, beperkt, onderbroken of stopgezet. Wordt bij
                een antwoord een bron weergegeven, dan wordt die automatisch
                gegenereerd en verifiëren wij niet dat zij het gegeven antwoord
                ondersteunt.
              </P>

              <H2>14. Premiumabonnementen</H2>
              <P>
                Premiumabonnementen worden aangeboden als automatisch
                verlengende abonnementen en worden aangekocht via de Apple App
                Store of Google Play. De prijzen, factureringsperiodes en
                inbegrepen functies zijn die welke op het ogenblik van de
                aankoop in de applicatie aan jou worden getoond.
              </P>
              <UL>
                <li>
                  <strong>Facturatie en opzegging.</strong> De appstore, en niet
                  Plantative, is de verkoper. Betaling, verlenging, facturatie,
                  opzegging en terugbetaling worden door de appstore afgehandeld
                  onder haar eigen voorwaarden en haar eigen privacybeleid. Je
                  abonnement wordt automatisch verlengd tot je het opzegt, en je
                  moet het via de instellingen van je appstore-account opzeggen
                  ten minste 24 uur vóór het einde van de lopende periode. Het
                  verwijderen van de applicatie zegt een abonnement niet op.
                </li>
                <li>
                  <strong>Terugbetalingen.</strong> Wij kunnen een terugbetaling
                  van een aankoop via een appstore niet verwerken, toekennen of
                  terugdraaien; je moet die bij de store aanvragen. Dit doet
                  geen afbreuk aan de rechten die je krachtens dwingend recht
                  tegenover ons hebt.
                </li>
                <li>
                  <strong>Herroepingsrecht.</strong> Ben je Consument in de
                  Europese Unie, dan beschik je over een herroepingsrecht van 14
                  dagen voor een overeenkomst tot levering van digitale inhoud
                  of een digitale dienst. Dat recht vervalt zodra de uitvoering
                  is begonnen met je voorafgaande uitdrukkelijke toestemming en
                  je erkenning dat je het daardoor verliest, overeenkomstig
                  artikel VI.53 WER. Is de appstore je tegenpartij voor de
                  aankoop, dan oefen je dat recht uit tegenover de store.
                </li>
                <li>
                  <strong>Wijzigingen aan abonnementen.</strong> Wij kunnen de
                  functies, quota of prijs van een abonnement wijzigen. Is een
                  wijziging wezenlijk nadelig voor jou, dan geven wij ten minste
                  30 dagen vooraf kennis en kan je opzeggen vóór zij in werking
                  treedt; waar dwingend recht dat vereist, wordt het
                  niet-gebruikte gedeelte van een vooruitbetaalde periode
                  terugbetaald.
                </li>
                <li>
                  <strong>Opschorting.</strong> Schorten wij je account op of
                  beëindigen wij het wegens schending van de
                  Gebruikersovereenkomst, dan kunnen Premiumfuncties
                  onbeschikbaar worden. Behoudens andersluidende dwingende
                  wetgeving is in dat geval geen terugbetaling verschuldigd, en
                  blijf je zelf verantwoordelijk voor het opzeggen van het
                  abonnement bij de appstore.
                </li>
                <li>
                  <strong>Reclame.</strong> De Diensten kunnen reclame bevatten.
                  Wordt een abonnement omschreven als reclamevrij, dan geldt dat
                  enkel voor de duur van een actief abonnement. Reclame zal als
                  zodanig herkenbaar zijn.
                </li>
                <li>
                  <strong>Uitspraken over steun aan natuurdoelen.</strong> Elke
                  uitspraak dat overschotten uit abonnementsinkomsten naar
                  natuur- of natuurbehoudsdoelen kunnen gaan, is een
                  niet-bindende intentieverklaring. Zij vormt geen contractuele
                  verbintenis, geen gift die namens jou wordt gedaan, en
                  verbindt geen enkel specifiek bedrag of aandeel van enige
                  betaling. Je verwerft daaruit geen enkel recht.
                </li>
              </UL>

              <H2>15. Beschikbaarheid van de Diensten</H2>
              <P>
                Wij streven ernaar de Diensten beschikbaar te houden, maar
                garanderen niet dat zij ononderbroken, tijdig, foutloos of vrij
                van beveiligingskwetsbaarheden zullen zijn. Wij kunnen de
                Diensten of een onderdeel ervan, met inbegrip van elke functie,
                opschorten, intrekken, beperken of wijzigen zonder
                aansprakelijkheid, om redenen van onderhoud, beveiliging,
                wetgeving of bedrijfsvoering. Is een onderbreking gepland en
                wezenlijk, dan geven wij daarvan redelijke kennis wanneer dat
                praktisch mogelijk is.
              </P>
              <P>
                Functies kunnen worden aangeboden op proef, in bèta of bij wijze
                van experiment; dergelijke functies worden geleverd in de staat
                waarin zij zich bevinden en kunnen op elk moment worden
                ingetrokken. Je bent zelf verantwoordelijk voor het bewaren van
                eigen kopieën van foto&rsquo;s, gegevens of andere Inhoud die
                voor jou van belang zijn. Wij bieden de Diensten niet aan als
                back-up-, archiverings- of bewaringsdienst.
              </P>

              <H2>16. Diensten van derden</H2>
              <P>
                De Diensten steunen op en werken samen met diensten van derden,
                waaronder cloudinfrastructuur, identiteitsaanbieders, appstores,
                aanbieders van plantherkenning en kunstmatige intelligentie, en
                aanbieders van berichten- en analysediensten. Je gebruik van die
                diensten kan door hun eigen voorwaarden worden beheerst. Wij
                hebben er geen controle over, doen daaromtrent geen enkele
                verklaring, en aanvaarden, voor zover wettelijk toegestaan, geen
                aansprakelijkheid voor hun handelen, nalaten, beschikbaarheid,
                inhoud of praktijken.
              </P>

              <H2>17. Onze intellectuele eigendom</H2>
              <P>
                De Diensten, de applicatie, de website, onze software,
                databanken, vormgeving, interface, teksten, grafische elementen
                en de naam en het logo Plantative zijn onze eigendom of worden
                aan ons in licentie gegeven en zijn beschermd door het
                intellectuele-eigendomsrecht. Mits je de Gebruikersovereenkomst
                naleeft, verlenen wij je een beperkte, persoonlijke,
                herroepbare, niet-exclusieve, niet-overdraagbare en
                niet-sublicentieerbare licentie om de applicatie te installeren
                en te gebruiken op een toestel dat je bezit of beheert, en om de
                website te gebruiken, voor je eigen niet-commerciële gebruik van
                de Diensten. Alle niet uitdrukkelijk verleende rechten zijn
                voorbehouden. Niets in de Gebruikersovereenkomst draagt enig
                intellectueel eigendomsrecht aan jou over.
              </P>

              <H2>18. Afwijzing van garanties</H2>
              <P>
                Voor zover wettelijk toegestaan, en onverminderd artikel 19.1,
                worden de Diensten en alle daarin beschikbare inhoud geleverd in
                de staat waarin zij zich bevinden en naargelang beschikbaarheid,
                en sluiten wij alle garanties, voorwaarden, verklaringen en
                bedingen uit die voortvloeien uit de wet, de gewoonte of
                anderszins, met inbegrip van elke impliciete garantie van
                bevredigende kwaliteit, verhandelbaarheid, geschiktheid voor een
                bepaald doel, juistheid, volledigheid, ononderbroken
                beschikbaarheid of niet-inbreuk.
              </P>
              <P>
                In het bijzonder doen wij geen enkele verklaring en geven wij
                geen enkele garantie over het bestaan, de identiteit, de
                eerlijkheid, de solvabiliteit, de betrouwbaarheid, de
                bekwaamheid of het gedrag van enige gebruiker; over de
                juistheid, de rechtmatigheid of de volledigheid van enige
                Advertentie, beschrijving, foto, prijs of beoordeling; over de
                soort, de cultivar, de gezondheid, de levensvatbaarheid, de
                veiligheid, de giftigheid, de herkomst, het juridisch statuut of
                de geschiktheid voor enig doel van enige plant of enig
                plantaardig materiaal; over de vraag of een Transactie tot stand
                zal komen, zal worden uitgevoerd of zal worden betaald; of over
                de juistheid van enige uitvoer van de in artikel 13 beschreven
                functies.
              </P>
              <P>
                Niets in dit artikel beperkt of raakt de rechten die je als
                Consument krachtens dwingend recht hebt, met inbegrip van de
                wettelijke conformiteitsgarantie die van toepassing is op een
                aan jou geleverd Premiumabonnement krachtens Richtlijn (EU)
                2019/770 zoals omgezet in Belgisch recht en boek VI WER.
              </P>

              <H2>19. Beperking van aansprakelijkheid</H2>
              <H3>19.1 Wat nooit wordt uitgesloten</H3>
              <P>
                Niets in de Gebruikersovereenkomst sluit onze aansprakelijkheid
                uit of beperkt die voor overlijden of lichamelijk letsel
                veroorzaakt door onze nalatigheid, voor bedrog of bedrieglijke
                misleiding, voor ons eigen opzet of onze eigen zware fout, voor
                aansprakelijkheid krachtens de wetgeving tot omzetting van
                Richtlijn 85/374/EEG inzake aansprakelijkheid voor producten met
                gebreken, voor de niet-uitvoering van een verbintenis die een
                van de voornaamste prestaties van de overeenkomst uitmaakt, of
                voor enige andere aansprakelijkheid die niet rechtsgeldig kan
                worden uitgesloten of beperkt, met inbegrip van artikel VI.83
                WER en het overige dwingende Belgische consumentenrecht. Elke
                andere bepaling van dit artikel 19 geldt onder voorbehoud van
                dit artikel 19.1.
              </P>
              <H3>19.2 Aangelegenheden waarvoor wij niet instaan</H3>
              <P>
                Voor zover wettelijk toegestaan, zijn wij niet aansprakelijk
                voor verlies of schade die voortvloeit uit of verband houdt met:
              </P>
              <UL>
                <li>
                  het handelen, nalaten, gedrag, de verklaringen, de Inhoud, de
                  Advertenties, de beoordelingen of de solvabiliteit van enige
                  gebruiker of andere derde;
                </li>
                <li>
                  het bestaan, de identiteit, de soort, de cultivar, de
                  kwaliteit, de gezondheid, de toestand, de levensvatbaarheid,
                  de veiligheid, de giftigheid, de oorsprong, de herkomst, de
                  rechtmatigheid of de geschiktheid voor enig doel van enige
                  plant of enig plantaardig materiaal dat via of naar aanleiding
                  van het gebruik van de Diensten wordt aangeboden, verkocht,
                  geruild, weggegeven of geleverd;
                </li>
                <li>
                  de totstandkoming, de inhoud, de uitvoering, de
                  niet-uitvoering, de gebrekkige uitvoering, de schending, de
                  annulering, de ontbinding of het verval van enige Transactie
                  of andere overeenkomst tussen gebruikers;
                </li>
                <li>
                  enige betaling die tussen gebruikers wordt verricht,
                  ingehouden, vertraagd, teruggedraaid of niet verricht, met
                  inbegrip van wanbetaling, overbetaling, fraude, terugvordering
                  of het falen van een betalingsmethode;
                </li>
                <li>
                  enig verlies, diefstal, beschadiging, vertraging,
                  achteruitgang, ziekte, aantasting of afsterven van plantaardig
                  materiaal, tijdens vervoer, tijdens opslag of in het bezit van
                  enige persoon;
                </li>
                <li>
                  enige interactie tussen gebruikers, online of persoonlijk, met
                  inbegrip van elke via de Diensten afgesproken ontmoeting en
                  elke bekendmaking van een adres of andere informatie door de
                  ene gebruiker aan de andere;
                </li>
                <li>
                  het vertrouwen op enige herkenning, diagnose,
                  verzorgingsadvies, rangschikking, aanbeveling of andere
                  geautomatiseerde uitvoer van de Diensten, met inbegrip van die
                  beschreven in artikel 13;
                </li>
                <li>
                  enig onderzoek, enige handhavingsmaatregel, inbeslagname,
                  vernietigingsbevel, geldboete, sanctie of ander bestuurs- of
                  strafrechtelijk gevolg dat voortvloeit uit jouw planten, jouw
                  Advertenties of jouw Transacties;
                </li>
                <li>
                  enige dienst van derden, appstore, identiteitsaanbieder,
                  vervoerder, betalingsdienstaanbieder, netwerk of toestel;
                </li>
                <li>
                  ongeoorloofde toegang tot, openbaarmaking, wijziging of
                  vernietiging van Inhoud of gegevens die zich voordoet ondanks
                  de uitvoering van passende technische en organisatorische
                  maatregelen; of
                </li>
                <li>
                  het verlies van Inhoud, Advertenties, berichten, beoordelingen
                  of accounttoegang als gevolg van een maatregel genomen
                  overeenkomstig artikel 12 of als gevolg van je eigen handelen
                  of nalaten.
                </li>
              </UL>
              <H3>19.3 Uitgesloten schadeposten</H3>
              <P>
                Voor zover wettelijk toegestaan, zijn wij niet aansprakelijk
                voor indirecte, incidentele, bijzondere, punitieve of
                gevolgschade, noch voor winstderving, omzetverlies, verlies van
                cliënteel, contracten, kansen, verwachte besparingen, goodwill
                of reputatie, voor verlies of beschadiging van gegevens, of voor
                de waarde van enige plant, stek, zaad of verzameling, telkens
                ongeacht de wijze waarop die schade ontstaat en ongeacht of zij
                voorzienbaar was.
              </P>
              <H3>19.4 Maximumbedrag</H3>
              <P>
                Voor zover wettelijk toegestaan, is onze totale gezamenlijke
                aansprakelijkheid die voortvloeit uit of verband houdt met de
                Gebruikersovereenkomst en de Diensten in elke periode van twaalf
                opeenvolgende maanden beperkt tot het hoogste van (i) het totale
                bedrag dat je in de twaalf maanden vóór de schadeverwekkende
                gebeurtenis werkelijk aan ons voor Premium hebt betaald, en (ii)
                honderd euro (EUR 100).
              </P>
              <H3>19.5 Jouw aandeel en schadebeperking</H3>
              <P>
                Elke aansprakelijkheid van ons wordt verminderd in de mate
                waarin de schade is veroorzaakt of vergroot door je eigen
                handelen of nalaten, met inbegrip van een schending van de
                Gebruikersovereenkomst of van artikel 8, of doordat je nalaat
                redelijke maatregelen te nemen om de schade te beperken.
              </P>
              <H3>19.6 Termijn voor vorderingen</H3>
              <P>
                Ben je geen Consument, dan moet elke vordering tegen ons worden
                ingesteld binnen één jaar na de dag waarop je kennis hebt
                gekregen, of redelijkerwijs kennis had moeten krijgen, van de
                feiten die eraan ten grondslag liggen, bij gebreke waarvan zij
                vervalt. Dit artikel 19.6 is niet van toepassing op Consumenten.
              </P>
              <H3>19.7 Grondslag van de overeenkomst</H3>
              <P>
                De risicoverdeling in dit artikel weerspiegelt dat de kern van
                de Diensten kosteloos of tegen een lage abonnementsprijs
                beschikbaar wordt gesteld, en dat wij noch deelnemen aan, noch
                commissie ontvangen op, Transacties tussen gebruikers. Zij vormt
                een wezenlijke grondslag waarop wij de Diensten aanbieden.
              </P>

              <H2>20. Vrijwaring</H2>
              <P>
                Ben je geen Consument, dan vrijwaar je ons en stel je ons
                schadeloos voor alle aanspraken, vorderingen, procedures,
                schade, boetes, sancties, verliezen, kosten en redelijke
                juridische uitgaven die voortvloeien uit of verband houden met
                je Inhoud, je Advertenties, je Transacties, je schending van de
                Gebruikersovereenkomst of je schending van enige wet of enig
                recht van derden.
              </P>
              <P>
                Ben je Consument, dan ben je ons in die omstandigheden slechts
                aansprakelijk in de mate waarin de aanspraak, het verlies of de
                uitgave voortvloeit uit je opzettelijke of grof nalatige
                schending van de Gebruikersovereenkomst of uit je schending van
                de wet, en enkel in de mate waarin die aansprakelijkheid uit het
                gemeen recht voortvloeit. Niets in dit artikel breidt je
                aansprakelijkheid uit boven wat het gemeen recht bepaalt.
              </P>

              <H2>21. Opschorting, beëindiging en verwijdering</H2>
              <P>
                Je kan op elk moment stoppen met het gebruik van de Diensten en
                je account verwijderen via de applicatie of via
                plantative@gmail.com. De gevolgen van verwijdering voor je
                persoonsgegevens zijn beschreven in artikel 10 van ons{' '}
                <Link
                  href="/nl/privacy-policy/"
                  className="text-green-700 underline"
                >
                  Privacybeleid
                </Link>
                .
              </P>
              <P>
                Wij kunnen je toegang tot de Diensten geheel of gedeeltelijk
                opschorten of beëindigen overeenkomstig artikel 12, wanneer de
                wet of een bevel van een bevoegde overheid dat vereist, wanneer
                dat nodig is om de Diensten, andere gebruikers of een derde
                tegen schade te beschermen, wanneer je onjuiste
                registratiegegevens hebt verstrekt, of wanneer je account meer
                dan 24 opeenvolgende maanden inactief is geweest. Behalve
                wanneer onmiddellijk optreden noodzakelijk is, geven wij je
                redelijke voorafgaande kennisgeving en, wanneer de maatregel
                betrekking heeft op inhoud of gedrag, een motivering
                overeenkomstig artikel 12.2.
              </P>
              <P>
                Bij beëindiging eindigt de in artikel 17 aan jou verleende
                licentie onmiddellijk, kunnen je Advertenties worden ingetrokken
                en kan je Inhoud worden verwijderd. De artikelen 6, 8, 10.1,
                10.2, 10.4, 14, 16 tot en met 20, 22 en 24 tot en met 27 blijven
                na beëindiging van kracht, samen met elke andere bepaling die
                naar haar aard bestemd is om voort te duren.
              </P>

              <H2>22. Overmacht</H2>
              <P>
                Wij zijn niet aansprakelijk voor enig tekortschieten of enige
                vertraging in de nakoming van onze verbintenissen die wordt
                veroorzaakt door omstandigheden buiten onze redelijke controle,
                waaronder natuurrampen, epidemieën, oorlog, terrorisme,
                burgerlijke onlusten, staking, het uitvallen van
                telecommunicatie- of internetinfrastructuur, het uitvallen of
                stopzetten van een dienst van derden waarvan de Diensten
                afhankelijk zijn, cyberaanvallen, stroomuitval, embargo&rsquo;s
                en elke handeling, elk bevel of elke maatregel van een overheid
                of bevoegde autoriteit.
              </P>

              <H2>23. Overdracht</H2>
              <P>
                Wij kunnen de Gebruikersovereenkomst geheel of gedeeltelijk
                overdragen of doen overgaan op een rechtsopvolger in het kader
                van een fusie, een reorganisatie, de inbreng van de activiteit
                in een vennootschap, of de verkoop of overdracht van het geheel
                of een deel van onze activa, op voorwaarde dat je rechten uit de
                Gebruikersovereenkomst daardoor niet worden verminderd. Je mag
                de Gebruikersovereenkomst of enig recht daaruit niet overdragen
                zonder onze voorafgaande schriftelijke toestemming.
              </P>

              <H2>24. Kennisgevingen</H2>
              <P>
                Wij kunnen je kennisgeven via de applicatie, via een pushbericht
                of per e-mail op het adres dat aan je account is gekoppeld, en
                een dergelijke kennisgeving wordt geacht te zijn ontvangen op de
                dag van verzending. Je moet dat e-mailadres actueel houden. Je
                kan ons kennisgeven via plantative@gmail.com en, wanneer een
                kennisgeving schriftelijk moet gebeuren en rechtsgevolgen moet
                hebben, tevens per aangetekende brief aan ons vestigingsadres.
              </P>

              <H2>25. Klachten en geschillenbeslechting</H2>
              <P>
                Heb je een klacht, neem dan eerst contact met ons op via
                plantative@gmail.com. Wij bevestigen je klacht en streven ernaar
                binnen 30 dagen inhoudelijk te antwoorden.
              </P>
              <P>
                Ben je een Consument met woonplaats in België en kunnen wij je
                klacht niet oplossen, dan kan je die voorleggen aan de
                Consumentenombudsdienst, een autonome openbare dienst die
                kosteloos bemiddelt tussen consumenten en ondernemingen:
              </P>
              <P>
                Consumentenombudsdienst
                <br />
                Koning Albert II-laan 8 bus 1, 1000 Brussel, België
                <br />
                Telefoon: +32 2 702 52 00
                <br />
                consumentenombudsdienst.be
              </P>
              <P>
                Consumenten met woonplaats in een andere lidstaat kunnen zich
                wenden tot het Europees Centrum voor de Consument in hun land.
                Het onlinegeschillenbeslechtingsplatform van de Europese
                Commissie is op 20 juli 2025 stopgezet na de opheffing van
                Verordening (EU) nr. 524/2013 door Verordening (EU) 2024/3228,
                en is dus niet langer beschikbaar. Het voorleggen van een klacht
                aan een bemiddelingsorgaan is vrijwillig, schorst geen
                verjaringstermijn tenzij de wet dat bepaalt, en doet geen
                afbreuk aan je recht om een zaak voor de rechter te brengen.
              </P>
              <P>
                Klachten over onze moderatiebeslissingen worden behandeld
                overeenkomstig artikel 12.3.
              </P>

              <H2>26. Toepasselijk recht en bevoegde rechter</H2>
              <P>
                De Gebruikersovereenkomst en elke niet-contractuele verbintenis
                die daaruit voortvloeit of daarmee verband houdt, worden
                beheerst door het Belgisch recht.
              </P>
              <P>
                Ben je een Consument met gewone verblijfplaats in een ander
                land, dan ontneemt deze rechtskeuze je niet de bescherming van
                bepalingen waarvan niet bij overeenkomst kan worden afgeweken
                krachtens het recht van dat land, overeenkomstig artikel 6, lid
                2, van Verordening (EG) nr. 593/2008.
              </P>
              <P>
                Ben je een Consument, dan kan je een vordering tegen ons
                instellen voor de gerechten van het land waar je woonplaats hebt
                of voor de gerechten van onze vestigingsplaats, en kunnen wij
                enkel voor de gerechten van het land waar je woonplaats hebt een
                vordering tegen jou instellen, overeenkomstig de artikelen 17
                tot en met 19 van Verordening (EU) nr. 1215/2012.
              </P>
              <P>
                Ben je geen Consument, dan zijn de gerechten die bevoegd zijn
                voor onze vestigingsplaats in België uitsluitend bevoegd voor
                elk geschil dat uit de Gebruikersovereenkomst voortvloeit of
                daarmee verband houdt.
              </P>

              <H2>27. Algemene bepalingen</H2>
              <UL>
                <li>
                  <strong>Deelbaarheid en behoud.</strong> Wordt een bepaling
                  van de Gebruikersovereenkomst geheel of gedeeltelijk ongeldig,
                  onwettig of niet-afdwingbaar bevonden, dan wordt zij geacht te
                  zijn aangepast tot het minimum dat nodig is om haar geldig,
                  wettig en afdwingbaar te maken met behoud van haar doel voor
                  zover mogelijk, of, indien dat niet mogelijk is, geschrapt. De
                  overige bepalingen blijven onverkort van kracht.
                </li>
                <li>
                  <strong>Dwingend recht gaat voor.</strong> Niets in de
                  Gebruikersovereenkomst strekt ertoe rechten uit te sluiten of
                  te beperken die je krachtens dwingende bepalingen van het
                  toepasselijke recht hebt en die niet rechtsgeldig kunnen
                  worden uitgesloten of beperkt, en elke bepaling die dat wel
                  zou doen, geldt enkel voor zover de wet dat toelaat.
                </li>
                <li>
                  <strong>Geen afstand.</strong> Het niet of laattijdig
                  uitoefenen van een recht door ons houdt geen afstand van dat
                  recht in, en de eenmalige of gedeeltelijke uitoefening ervan
                  verhindert de verdere uitoefening niet.
                </li>
                <li>
                  <strong>Volledige overeenkomst.</strong> De
                  Gebruikersovereenkomst vormt de volledige overeenkomst tussen
                  jou en ons met betrekking tot de Diensten en vervangt alle
                  vorige versies ervan. Niets in deze alinea beperkt de
                  aansprakelijkheid voor bedrog of bedrieglijke misleiding.
                </li>
                <li>
                  <strong>Geen samenwerkingsverband.</strong> Niets in de
                  Gebruikersovereenkomst doet een maatschap, joint venture,
                  lastgeving, franchise of arbeidsrelatie tussen jou en ons
                  ontstaan.
                </li>
                <li>
                  <strong>Derden.</strong> Behoudens uitdrukkelijke
                  andersluidende bepaling kan niemand anders dan jij en wij
                  enige bepaling van de Gebruikersovereenkomst afdwingen.
                </li>
                <li>
                  <strong>Talen.</strong> De Gebruikersovereenkomst wordt in het
                  Nederlands en in het Engels ter beschikking gesteld, en elke
                  versie is even authentiek. Ben je Consument, dan kan je je
                  beroepen op de versie in de taal waarin de Diensten aan jou
                  beschikbaar zijn gesteld.
                </li>
                <li>
                  <strong>Titels.</strong> Titels dienen enkel het leesgemak en
                  hebben geen invloed op de uitlegging.
                </li>
              </UL>

              <H2>28. Juridische gegevens</H2>
              <P>
                <strong>Sebastiaan Verplancke</strong>, handelend onder de naam
                Plantative
                <br />
                <strong>Patijntjestraat 87, 9000 Gent, België</strong>
                <br />
                Ondernemingsnummer 1034.776.796 &middot; btw BE 1034.776.796
                <br />
                plantative@gmail.com
              </P>
            </div>

            <div className="mt-12 text-center">
              <p className="font-bold text-gray-600">
                Laatst bijgewerkt: 1 september 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceNL;
