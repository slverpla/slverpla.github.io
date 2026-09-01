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

const Table = ({
  head,
  rows,
}: {
  head: string[];
  rows: (string | React.ReactNode)[][];
}) => (
  <div className="mb-6 overflow-x-auto">
    <table className="w-full min-w-[36rem] border-collapse text-left text-sm text-gray-600">
      <thead>
        <tr className="border-b border-gray-300">
          {head.map((h) => (
            <th key={h} className="py-2 pr-4 font-semibold text-gray-900">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-gray-200 align-top">
            {row.map((cell, j) => (
              <td key={j} className="py-2 pr-4">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PrivacyPolicyNL = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Plantative Privacybeleid
            </h1>
            <p className="mb-8 text-sm text-gray-500">
              Versie 2.0 &middot; Van kracht vanaf 31 augustus 2026
            </p>

            <div className="prose prose-gray max-w-none">
              <P>
                Dit Privacybeleid (het &rsquo;Beleid&rsquo;) beschrijft hoe
                Plantative persoonsgegevens verzamelt, gebruikt, doorgeeft en
                anderszins verwerkt wanneer je de mobiele applicatie van
                Plantative, de website plantative.com en de bijbehorende
                back-enddiensten (samen de &rsquo;Diensten&rsquo;) gebruikt. Het
                is opgesteld overeenkomstig de artikelen 13 en 14 van
                Verordening (EU) 2016/679 (de &rsquo;AVG&rsquo;) en de Belgische
                wet van 30 juli 2018 betreffende de bescherming van natuurlijke
                personen met betrekking tot de verwerking van persoonsgegevens.
              </P>
              <P>
                Dit Beleid maakt deel uit van, en is door verwijzing opgenomen
                in, onze{' '}
                <Link href="/nl/terms" className="text-green-700 underline">
                  Servicevoorwaarden
                </Link>{' '}
                (samen de &rsquo;Gebruikersovereenkomst&rsquo;). Begrippen met
                een hoofdletter die hier niet worden gedefinieerd, hebben de
                betekenis die daaraan in de Servicevoorwaarden wordt gegeven. In
                geval van tegenstrijdigheid tussen dit Beleid en de
                Servicevoorwaarden inzake de verwerking van persoonsgegevens,
                prevaleert dit Beleid.
              </P>
              <P>
                Dit Beleid is opgesteld in het Nederlands en het Engels. Beide
                versies hebben dezelfde inhoud; in geval van tegenstrijdigheid
                prevaleert de Nederlandse versie voor gebruikers met gewone
                verblijfplaats in België of Nederland.
              </P>

              <H2>1. Identiteit van de verwerkingsverantwoordelijke</H2>
              <P>
                De verwerkingsverantwoordelijke in de zin van artikel 4, lid 7,
                AVG is <strong>Sebastiaan Verplancke</strong>, natuurlijke
                persoon die in België een zelfstandige activiteit uitoefent
                (eenmanszaak) en handelt onder de naam{' '}
                <strong>Plantative</strong>, met vestigingsadres te{' '}
                <strong>Patijntjestraat 87, 9000 Gent, België</strong>,
                ingeschreven in de Kruispuntbank van Ondernemingen onder
                ondernemingsnummer <strong>1034.776.796</strong> en
                geïdentificeerd voor btw-doeleinden onder nummer{' '}
                <strong>BE 1034.776.796</strong> (&rsquo;Plantative&rsquo;,
                &rsquo;wij&rsquo;, &rsquo;ons&rsquo;, &rsquo;onze&rsquo;).
              </P>
              <P>
                Alle privacyvragen en alle verzoeken tot uitoefening van de in
                artikel 13 beschreven rechten kunnen worden gericht aan{' '}
                <strong>plantative@gmail.com</strong>. Wij hebben geen
                functionaris voor gegevensbescherming aangesteld, aangezien wij
                daartoe niet verplicht zijn op grond van artikel 37 AVG.
              </P>
              <P>
                Wanneer je inlogt via een externe identiteitsaanbieder, of
                wanneer je een abonnement aanschaft via een appwinkel, treedt
                die partij op als zelfstandige verwerkingsverantwoordelijke voor
                haar eigen verwerking. Dit Beleid is niet van toepassing op, en
                wij aanvaarden geen verantwoordelijkheid voor, verwerkingen die
                door die partijen onder hun eigen privacybeleid worden
                uitgevoerd.
              </P>

              <H2>2. Toepassingsgebied</H2>
              <P>
                Dit Beleid is van toepassing op persoonsgegevens die via de
                Diensten worden verwerkt. Het is niet van toepassing op (a)
                websites, applicaties of diensten van derden die je vanuit of
                via de Diensten bereikt, (b) informatie die je buiten de
                Diensten om rechtstreeks aan een andere gebruiker verstrekt, of
                (c) verwerkingen door andere gebruikers van inhoud die je aan
                hen beschikbaar hebt gesteld.
              </P>

              <H2>3. Categorieën van persoonsgegevens die wij verwerken</H2>

              <H3>3.1 Gegevens die je aan ons verstrekt</H3>
              <UL>
                <li>
                  <strong>Account- en identiteitsgegevens:</strong> e-mailadres
                  en authenticatiegegevens, voor- en achternaam, profielfoto,
                  profielomschrijving, taalinstelling, en het feit, de datum en
                  het tijdstip van je aanvaarding van de Gebruikersovereenkomst.
                  Wachtwoorden worden uitsluitend als gezouten cryptografische
                  hash opgeslagen door onze authenticatieaanbieder en zijn voor
                  ons niet in leesbare vorm toegankelijk.
                </li>
                <li>
                  <strong>Gegevens bij inloggen via derden:</strong> wanneer je
                  inlogt met Google, Apple of Facebook ontvangen wij een
                  permanente gebruikersidentificator en, afhankelijk van je
                  instellingen bij die aanbieder en de toestemmingen die je
                  verleent, je e-mailadres, naam en avatar. Bij gebruik van
                  Apple Private Relay ontvangen wij een doorgestuurd adres in
                  plaats van je werkelijke e-mailadres.
                </li>
                <li>
                  <strong>Adres- en locatiegegevens:</strong> de adressen die je
                  toevoegt (label, straat, nummer, appartement, postcode, stad,
                  land) samen met de geografische coördinaten daarvan, en de
                  zichtbaarheidsinstelling die je per adres kiest (verborgen,
                  enkel stad, of volledig adres).
                </li>
                <li>
                  <strong>Gebruikersinhoud:</strong> plantadvertenties,
                  foto&rsquo;s, omschrijvingen en verzorgingsnotities,
                  groeidagboekvermeldingen en metingen, gezocht-berichten,
                  favorieten, ruil- en biedgeschiedenis, beoordelingen en
                  recensies, directe en communitychatberichten, en meldingen die
                  je indient over andere gebruikers of inhoud.
                </li>
                <li>
                  <strong>Verzorgingsprofiel:</strong> het door jou gekozen
                  ervarings- en toewijdingsniveau voor plantverzorging, gebruikt
                  om verzorgingsadvies af te stemmen.
                </li>
                <li>
                  <strong>Support- en correspondentiegegevens:</strong> de
                  inhoud van je berichten aan ons, documentatie die je
                  aanlevert, je contactgegevens en bijbehorende metagegevens.
                </li>
                <li>
                  <strong>Abonnementsgegevens:</strong> wanneer betaalde
                  functies worden aangeboden, wordt de aankoop verwerkt door
                  Apple of Google onder hun eigen voorwaarden. Wij ontvangen een
                  abonnementsstatus en een transactie-identificator. Wij
                  ontvangen, verwerken en bewaren geen betaalkaart- of
                  bankgegevens.
                </li>
              </UL>

              <H3>3.2 Gegevens die automatisch worden verzameld</H3>
              <UL>
                <li>
                  <strong>Apparaat- en verbindingsgegevens:</strong> IP-adres,
                  apparaatmodel en fabrikant, besturingssysteem en versie,
                  applicatieversie en build, taal en regio van het apparaat,
                  tijdzone en verbindingsstatus.
                </li>
                <li>
                  <strong>Diagnostische en stabiliteitsgegevens:</strong>{' '}
                  crashrapporten, foutmeldingen, niet-fatale foutlogboeken,
                  prestatiegegevens en de toestand van het apparaat op het
                  moment van een fout, verzameld via onze aanbieder van
                  diagnostiek en crashrapportage.
                </li>
                <li>
                  <strong>
                    Integriteits- en misbruikbestrijdingsgegevens:
                  </strong>{' '}
                  attestatietokens uitgegeven door de integriteitsdiensten van
                  de mobiele besturingssysteemplatformen en gevalideerd via onze
                  attestatieaanbieder, en tellers voor snelheidsbeperking en
                  quota gekoppeld aan je account.
                </li>
                <li>
                  <strong>Gedragsanalyse en sessiereconstructie:</strong> wij
                  gebruiken een externe aanbieder van gedragsanalyse, die een
                  reconstructie van je gebruik van de app vastlegt, waaronder de
                  schermen die je bekijkt, je navigatiepad, tikken,
                  scrollbewegingen en gebaren, sessieduur en apparaatkenmerken,
                  en dat heatmaps en geaggregeerde gedragsstatistieken
                  produceert. Die aanbieder werkt met standaardmaskering,
                  waarbij tekstinhoud, inclusief tekst die je invoert, vóór
                  verzending wordt gemaskeerd. Wij gebruiken deze gegevens niet
                  om je persoonlijk te identificeren, maar zij vormen
                  persoonsgegevens omdat zij aan je sessie en apparaat kunnen
                  worden gekoppeld.
                </li>
                <li>
                  <strong>Interactiegebeurtenissen:</strong> bekeken
                  advertenties, zoekopdrachten, favorieten, biedingen en
                  vergelijkbare interacties worden, onderworpen aan quota per
                  gebruiker, doorgegeven aan onze eigen back-end en gebruikt om
                  de ontdekkingsfeed te rangschikken en te personaliseren en om
                  geaggregeerde tellers bij te houden. Deze gebeurtenissen
                  worden bewaard in logbestanden op onze servers.
                </li>
                <li>
                  <strong>Nauwkeurige locatiegegevens:</strong> wanneer je de
                  toestemming van het besturingssysteem verleent, raadplegen wij
                  de coördinaten van je apparaat om een adres vooraf in te
                  vullen en om advertenties op basis van nabijheid te tonen. Je
                  kunt deze toestemming op elk moment intrekken in je
                  apparaatinstellingen, zonder afbreuk te doen aan de
                  rechtmatigheid van de verwerking vóór de intrekking.
                </li>
                <li>
                  <strong>
                    Bij benadering afgeleide locatie op basis van het IP-adres:
                  </strong>{' '}
                  wanneer geen coördinaten beschikbaar zijn, leiden wij uit je
                  IP-adres een landcode van twee letters af om een relevante
                  feed samen te stellen. Het IP-adres wordt in het werkgeheugen
                  omgezet en vervolgens verworpen; enkel de landcode wordt
                  gebruikt en deze wordt niet in onze interactieregistraties
                  weggeschreven.
                </li>
                <li>
                  <strong>Identificatoren voor pushmeldingen:</strong> het
                  berichtentoken dat aan je app-installatie wordt toegekend,
                  gebruikt om meldingen over chats, ruilen en plantverzorging te
                  bezorgen.
                </li>
                <li>
                  <strong>Metingen van omgevingslicht:</strong> wanneer je de
                  lichtmeetfunctie gebruikt, worden metingen van de lichtsensor
                  van het apparaat lokaal op je toestel verwerkt om een
                  lichtbeoordeling voor een plant te produceren.
                </li>
                <li>
                  <strong>Lokale opslag op je apparaat:</strong> de applicatie
                  houdt een lokale cache bij (SQLite, sleutel-waardeopslag en
                  versleutelde beveiligde opslag) met je profiel, planten, chats
                  en sessietokens, zodat de applicatie offline werkt.
                </li>
              </UL>

              <H3>3.3 Bijzondere categorieën van persoonsgegevens</H3>
              <P>
                Wij streven er niet naar bijzondere categorieën van
                persoonsgegevens in de zin van artikel 9 AVG te verzamelen, noch
                gegevens betreffende strafrechtelijke veroordelingen en
                strafbare feiten in de zin van artikel 10 AVG. Je dient
                dergelijke gegevens niet op te nemen in je profiel,
                advertenties, foto&rsquo;s, chatberichten of enig ander vrij
                tekstveld. Wanneer je er toch voor kiest dergelijke gegevens via
                de Diensten openbaar te maken, doe je dit op eigen initiatief en
                maak je die gegevens, voor zover van toepassing, kennelijk
                openbaar in de zin van artikel 9, lid 2, onder e), AVG.
              </P>

              <H2>4. Doeleinden en rechtsgronden</H2>
              <P>
                Wij verwerken persoonsgegevens uitsluitend wanneer een
                rechtsgrond op grond van artikel 6, lid 1, AVG van toepassing
                is, zoals hieronder uiteengezet.
              </P>
              <Table
                head={['Doeleinde', 'Categorieën', 'Rechtsgrond']}
                rows={[
                  [
                    'Aanmaken en beheren van je account; authenticatie',
                    'Account-, identiteits- en inloggegevens via derden',
                    'Uitvoering van een overeenkomst — art. 6, lid 1, onder b)',
                  ],
                  [
                    'Publiceren van advertenties en gezocht-berichten; ruilen, biedingen, favorieten, volgers, beoordelingen en chat',
                    'Gebruikersinhoud, accountgegevens, zichtbaarheidsinstellingen van het adres',
                    'Uitvoering van een overeenkomst — art. 6, lid 1, onder b)',
                  ],
                  [
                    'Aanbieden van plantidentificatie, verzorgingsadvies en de in-app-assistent',
                    "Foto's, plantgegevens, chatgeschiedenis, verzorgingsprofiel",
                    'Uitvoering van een overeenkomst — art. 6, lid 1, onder b)',
                  ],
                  [
                    'Vooraf invullen van adressen en tonen van advertenties op basis van nabijheid',
                    'Nauwkeurige locatiegegevens',
                    'Toestemming — art. 6, lid 1, onder a), verleend via de toestemming van het besturingssysteem en op elk moment intrekbaar',
                  ],
                  [
                    'Versturen van pushmeldingen',
                    'Pushtoken, accountidentificator',
                    'Toestemming — art. 6, lid 1, onder a), intrekbaar in de apparaat- of app-instellingen',
                  ],
                  [
                    'Gedragsanalyse, sessiereconstructie en heatmaps',
                    'Analyse- en sessiegegevens, apparaatgegevens',
                    'Toestemming — art. 6, lid 1, onder a), gelezen in samenhang met artikel 5, lid 3, van Richtlijn 2002/58/EG, waar die toestemming in jouw rechtsgebied vereist is; anders ons gerechtvaardigd belang bij het begrijpen en verbeteren van de Diensten — art. 6, lid 1, onder f)',
                  ],
                  [
                    'Rangschikken en personaliseren van de ontdekkingsfeed',
                    'Interactiegebeurtenissen, bij benadering afgeleide locatie',
                    'Gerechtvaardigde belangen — art. 6, lid 1, onder f): het aanbieden van een bruikbare en relevante dienst',
                  ],
                  [
                    'Onderzoeken van crashes en waarborgen van stabiliteit en prestaties',
                    'Diagnostische gegevens, apparaatgegevens',
                    'Gerechtvaardigde belangen — art. 6, lid 1, onder f): de Diensten operationeel en veilig houden',
                  ],
                  [
                    'Voorkomen van fraude, misbruik, spam en onbevoegde toegang; handhaven van de Gebruikersovereenkomst; modereren van inhoud en behandelen van meldingen',
                    'Accountgegevens, apparaatattestatie, interactie- en inhoudsgegevens',
                    'Gerechtvaardigde belangen — art. 6, lid 1, onder f): bescherming van de Diensten, onze gebruikers en derden',
                  ],
                  [
                    'Versturen van service- en transactieberichten, waaronder e-mailverificatie',
                    'E-mailadres, accountgegevens',
                    'Uitvoering van een overeenkomst — art. 6, lid 1, onder b)',
                  ],
                  [
                    'Naleven van wettelijke verplichtingen en beantwoorden van rechtmatige verzoeken van bevoegde autoriteiten',
                    'Elke relevante categorie',
                    'Naleving van een wettelijke verplichting — art. 6, lid 1, onder c)',
                  ],
                  [
                    'Instellen, uitoefenen of onderbouwen van rechtsvorderingen, waaronder het bewaren van bewijs van betwiste ruilen',
                    'Elke relevante categorie',
                    'Gerechtvaardigde belangen — art. 6, lid 1, onder f), en art. 9, lid 2, onder f), waar van toepassing',
                  ],
                  [
                    'Doorvoeren van een fusie, overname, reorganisatie of overdracht van activa',
                    'Elke relevante categorie',
                    'Gerechtvaardigde belangen — art. 6, lid 1, onder f): het voeren en reorganiseren van onze onderneming',
                  ],
                ]}
              />
              <P>
                Waar wij ons beroepen op gerechtvaardigde belangen, hebben wij
                een afweging gemaakt tussen die belangen en jouw belangen,
                rechten en vrijheden. Je kunt nadere informatie over die
                afweging opvragen en je hebt het recht bezwaar te maken zoals
                beschreven in artikel 13.
              </P>

              <H2>
                5. Geautomatiseerde verwerking, artificiële intelligentie en de
                juistheid van advies
              </H2>
              <P>
                Bepaalde functies steunen op geautomatiseerde verwerking en op
                diensten voor artificiële intelligentie van derden. Wanneer je
                plantidentificatie, de in-app-assistent of verzorgingsverrijking
                gebruikt, worden de betrokken foto&rsquo;s, plantgegevens en
                gespreksgeschiedenis doorgegeven aan onze externe aanbieders van
                generatieve artificiële intelligentie en beeldherkenning,
                waaronder een gespecialiseerde plantidentificatiedienst, telkens
                met als doel een antwoord voor jou te genereren.
              </P>
              <P>
                De ontdekkingsfeed wordt automatisch gerangschikt op basis van
                je interactiegebeurtenissen en je bij benadering afgeleide
                locatie. Wij nemen geen besluiten die uitsluitend op
                geautomatiseerde verwerking berusten en die rechtsgevolgen voor
                je hebben of je anderszins in aanmerkelijke mate treffen in de
                zin van artikel 22, lid 1, AVG.
              </P>
              <P>
                <strong>
                  De uitvoer van deze functies is informatief en probabilistisch
                  van aard. Zij vormt geen professioneel tuinbouwkundig,
                  landbouwkundig, botanisch, veterinair, medisch,
                  voedingskundig, juridisch of regelgevend advies, en kan
                  onvolledig, verouderd of onjuist zijn, ook wat betreft
                  soortbepaling, giftigheid en eetbaarheid.
                </strong>{' '}
                Je dient elke identificatie of elk advies zelfstandig te
                verifiëren alvorens daarop te handelen, in het bijzonder vóór
                het innemen van een plant of het blootstellen van personen of
                dieren daaraan, en vóór het invoeren, uitvoeren, verhandelen of
                verwijderen van een plant die beschermd, invasief of anderszins
                gereglementeerd kan zijn. Voor zover wettelijk toegestaan
                sluiten wij elke aansprakelijkheid uit voor verlies of schade
                die voortvloeit uit het vertrouwen op die uitvoer.
              </P>

              <H2>6. Ontvangers en verwerkers</H2>
              <P>
                Wij geven persoonsgegevens uitsluitend door zoals hieronder
                beschreven. Onze verwerkers handelen op basis van onze
                gedocumenteerde instructies onder overeenkomsten gesloten
                overeenkomstig artikel 28, lid 3, AVG.
              </P>
              <Table
                head={['Categorie ontvanger', 'Functie', 'Rol']}
                rows={[
                  [
                    'Aanbieders van cloudinfrastructuur, opslag en databanken',
                    'Hosting van de Diensten, opslag van gegevens en afbeeldingen, exploitatie van onze API en zoekindex, en serverlogboeken',
                    'Verwerker',
                  ],
                  [
                    'Aanbieders van authenticatie-, beveiligings- en integriteitsdiensten',
                    'Aanmelden op het account, apparaatattestatie, misbruikpreventie en snelheidsbeperking',
                    'Verwerker',
                  ],
                  [
                    'Aanbieders van diagnostiek en crashrapportage',
                    'Crash-, fout- en stabiliteitsdiagnostiek',
                    'Verwerker',
                  ],
                  [
                    'Aanbieders van gedrags- en productanalyse',
                    'Gebruiksanalyse, sessiereconstructie en verbetering van de Diensten',
                    'Verwerker',
                  ],
                  [
                    'Aanbieders van e-mail-, bericht- en pushmeldingbezorging',
                    'Bezorging van transactie-, verificatie- en meldingsberichten',
                    'Verwerker',
                  ],
                  [
                    'Aanbieders van beeldherkenning en artificiële-intelligentiediensten',
                    'Plantidentificatie en assistentiefuncties op basis van de inhoud die je aanlevert',
                    'Verwerker',
                  ],
                  [
                    'Exploitanten van appwinkels en aanbieders van inlogdiensten van derden',
                    'Inloggen via derden, en distributie en facturatie via appwinkels',
                    'Zelfstandige verwerkingsverantwoordelijken voor hun eigen verwerking',
                  ],
                  [
                    'Andere gebruikers van de Diensten',
                    'Ontvangst van de profielgegevens, advertenties en berichten die je met hen deelt',
                    'Zelfstandige verwerkingsverantwoordelijken',
                  ],
                  [
                    'Professionele adviseurs, verzekeraars en auditoren',
                    'Juridische, boekhoudkundige en verzekeringsdoeleinden',
                    'Verwerkingsverantwoordelijke of verwerker, naargelang het geval',
                  ],
                  [
                    'Bevoegde autoriteiten, rechtbanken en opsporingsdiensten',
                    'Naleving van wettelijke verplichtingen en rechtmatige verzoeken, en verweer tegen rechtsvorderingen',
                    'Zelfstandige verwerkingsverantwoordelijken',
                  ],
                  [
                    'Een overnemer of rechtsopvolger',
                    'Fusie, overname, reorganisatie, insolventie of overdracht van het geheel of een deel van onze onderneming of activa',
                    'Verwerkingsverantwoordelijke',
                  ],
                ]}
              />
              <P>
                Een actuele lijst van de subverwerkers die wij inschakelen, met
                vermelding van hun identiteit en vestigingsplaats, is op verzoek
                beschikbaar via het adres in artikel 1.
              </P>
              <P>
                <strong>
                  Wij verkopen geen persoonsgegevens en wij delen geen
                  persoonsgegevens voor context-overschrijdende gedragsreclame
                  of voor doeleinden van gerichte reclame van derden.
                </strong>
              </P>

              <H2>7. Internationale doorgiften</H2>
              <P>
                Bepaalde van de hierboven vermelde ontvangers verwerken
                persoonsgegevens buiten de Europese Economische Ruimte, onder
                meer in de Verenigde Staten. Wanneer een dergelijke doorgifte
                plaatsvindt, gebeurt dit op basis van een adequaatheidsbesluit
                van de Europese Commissie, waaronder het EU&ndash;VS Data
                Privacy Framework wanneer de ontvanger daaronder gecertificeerd
                is, dan wel op basis van de standaardbepalingen inzake
                gegevensbescherming vastgesteld bij Uitvoeringsbesluit (EU)
                2021/914 van de Commissie, in voorkomend geval aangevuld met
                bijkomende technische en organisatorische maatregelen. Je kunt
                een kopie van de betreffende waarborgen opvragen via het adres
                in artikel 1.
              </P>

              <H2>8. Informatie die zichtbaar is voor anderen</H2>
              <P>
                De Diensten vormen een sociale marktplaats. Je weergavenaam,
                profielfoto, profielomschrijving, beoordelingen, volgrelaties,
                advertenties, gezocht-berichten en de afbeeldingen en
                omschrijvingen die je daaraan toevoegt, zijn zichtbaar voor
                andere gebruikers en kunnen, waar de betreffende pagina&rsquo;s
                openbaar toegankelijk zijn, zonder account raadpleegbaar zijn en
                door zoekmachines worden geïndexeerd. Je adres wordt uitsluitend
                bekendgemaakt voor zover de door jou gekozen
                zichtbaarheidsinstelling dat toelaat.
              </P>
              <P>
                Zodra informatie aan een andere gebruiker beschikbaar is
                gesteld, kan die gebruiker deze buiten onze controle bewaren,
                kopiëren, vastleggen via schermafbeelding, opnieuw publiceren of
                anderszins verwerken, en het verwijderen van je account haalt
                die informatie niet terug. Voor zover wettelijk toegestaan zijn
                wij niet verantwoordelijk of aansprakelijk voor het handelen of
                nalaten van andere gebruikers, met inbegrip van onrechtmatig
                gebruik van informatie die je ervoor gekozen hebt aan hen bekend
                te maken. Je dient via de Diensten geen informatie te publiceren
                waarvan je niet wenst dat deze openbaar wordt.
              </P>

              <H2>9. Bewaartermijnen</H2>
              <P>
                Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor
                de doeleinden waarvoor zij zijn verzameld, en daarna gedurende
                de periode waarin vorderingen kunnen worden ingesteld of zolang
                de wet dit vereist.
              </P>
              <Table
                head={['Categorie', 'Bewaartermijn']}
                rows={[
                  [
                    'Account-, profiel- en adresgegevens',
                    'Voor de duur van het account. Verwijderd of onomkeerbaar geanonimiseerd binnen 30 dagen na een geldig verwijderingsverzoek.',
                  ],
                  [
                    "Advertenties, gezocht-berichten, foto's en verzorgingsgegevens",
                    'Voor de duur van het account, of tot je ze verwijdert.',
                  ],
                  [
                    'Chatberichten',
                    'Zolang het gesprek bestaat, en daarna gedurende 12 maanden nadat de laatste deelnemer het gesprek verwijdert of verlaat.',
                  ],
                  [
                    'Ruil-, bied- en beoordelingsgegevens',
                    'Voor de duur van het account en daarna zolang noodzakelijk voor het instellen, uitoefenen of onderbouwen van rechtsvorderingen.',
                  ],
                  [
                    'Diagnostische en crashgegevens',
                    'Overeenkomstig de bewaartermijn van onze diagnostiekaanbieder, in beginsel niet langer dan 90 dagen.',
                  ],
                  [
                    'Gedragsanalyse- en sessiereconstructiegegevens',
                    'Overeenkomstig de bewaartermijn die onze analyseaanbieder toepast, waarna deze door die aanbieder worden verwijderd.',
                  ],
                  [
                    'Logboeken van interactiegebeurtenissen',
                    'Tot 12 maanden, waarna zij worden verwijderd of geaggregeerd tot niet-persoonsgebonden statistieken.',
                  ],
                  [
                    'Server-, beveiligings- en antimisbruiklogboeken',
                    'Tot 12 maanden, of langer wanneer dit nodig is om een specifiek incident te onderzoeken.',
                  ],
                  [
                    'Gegevens onderworpen aan wettelijke bewaarplichten, waaronder boekhoudkundige stukken',
                    'Gedurende de wettelijke termijn, die naar Belgisch recht in beginsel zeven jaar bedraagt voor boekhoudkundige stukken.',
                  ],
                  [
                    'Gegevens op je eigen apparaat',
                    'Tot je uitlogt, de app-gegevens wist of de applicatie verwijdert.',
                  ],
                  [
                    'Back-ups',
                    'Restkopieën kunnen na verwijdering nog gedurende een beperkte periode in versleutelde back-ups aanwezig blijven en worden in de gewone back-upcyclus overschreven.',
                  ],
                ]}
              />

              <H2>10. Je account verwijderen</H2>
              <P>Je kunt je account op elk moment verwijderen:</P>
              <ol className="mb-4 list-decimal space-y-1 pl-6 text-gray-600">
                <li>
                  Open je profiel via de rechterzijde van de navigatiebalk.
                </li>
                <li>Tik op de bewerkknop bovenaan het scherm.</li>
                <li>
                  Scroll naar de onderkant van de pagina en kies
                  &rsquo;Verwijder account&rsquo;.
                </li>
                <li>Bevestig de verwijdering.</li>
              </ol>
              <P>
                Verwijdering is onomkeerbaar. Voor alle duidelijkheid: bij
                verwijdering worden niet verwijderd: (a) berichten die reeds aan
                andere gebruikers zijn bezorgd en die in hun gesprekken blijven
                staan; (b) inhoud die andere gebruikers buiten de Diensten
                hebben gekopieerd of bewaard; (c) geaggregeerde of onomkeerbaar
                geanonimiseerde statistieken, die geen persoonsgegevens meer
                vormen; of (d) gegevens die wij op grond van artikel 9 moeten of
                mogen bewaren, in het bijzonder voor het instellen, uitoefenen
                of onderbouwen van rechtsvorderingen en voor de naleving van
                wettelijke verplichtingen. Die bewaarde gegevens blijven beperkt
                tot wat voor die doeleinden noodzakelijk is.
              </P>

              <H2>11. Beveiliging</H2>
              <P>
                Wij nemen technische en organisatorische maatregelen die passend
                zijn gelet op het risico, overeenkomstig artikel 32 AVG. Deze
                omvatten versleuteling van gegevens tijdens verzending via TLS,
                versleuteling in rust door onze infrastructuuraanbieders,
                toegangsregels aan serverzijde die toegang tot opgeslagen
                gegevens beperken tot het strikt noodzakelijke,
                apparaatattestatie, versleutelde beveiligde opslag van
                inloggegevens op je apparaat, code-obfuscatie in releasebuilds,
                en toegangscontrole en logging op beheerinterfaces.
              </P>
              <P>
                <strong>
                  Geen enkele methode van verzending via het internet en geen
                  enkele methode van elektronische opslag is volledig veilig.
                  Hoewel wij passende maatregelen nemen, kunnen en zullen wij de
                  absolute veiligheid van persoonsgegevens niet waarborgen of
                  garanderen, en sluiten wij, voor zover wettelijk toegestaan,
                  aansprakelijkheid uit voor onbevoegde toegang, openbaarmaking,
                  wijziging of vernietiging die zich ondanks de uitvoering van
                  dergelijke maatregelen voordoet.
                </strong>{' '}
                Je bent verantwoordelijk voor het geheim houden van je
                inloggegevens en voor alle activiteit onder je account, en je
                dient ons zonder onnodige vertraging in kennis te stellen van
                elke vermoede compromittering. Wanneer een inbreuk in verband
                met persoonsgegevens waarschijnlijk een hoog risico inhoudt voor
                je rechten en vrijheden, stellen wij je daarvan in kennis
                overeenkomstig artikel 34 AVG.
              </P>

              <H2>12. Minderjarigen</H2>
              <P>
                De Diensten zijn uitsluitend bestemd voor personen van 18 jaar
                of ouder, en wij verwerken niet bewust persoonsgegevens van
                minderjarigen. Indien wij vaststellen dat een persoon jonger dan
                18 jaar een account heeft aangemaakt, verwijderen wij dat
                account en de bijbehorende persoonsgegevens zonder onnodige
                vertraging. Een ouder of voogd die meent dat een minderjarige
                ons persoonsgegevens heeft verstrekt, kan contact met ons
                opnemen via plantative@gmail.com.
              </P>

              <H2>13. Je rechten</H2>
              <P>
                Onder de voorwaarden en uitzonderingen van de AVG heb je het
                recht om:
              </P>
              <UL>
                <li>
                  uitsluitsel te verkrijgen over de vraag of wij
                  persoonsgegevens over jou verwerken en daartoe inzage te
                  verkrijgen (artikel 15);
                </li>
                <li>
                  rectificatie van onjuiste persoonsgegevens en aanvulling van
                  onvolledige persoonsgegevens te verkrijgen (artikel 16);
                </li>
                <li>
                  wissing van persoonsgegevens te verkrijgen (artikel 17);
                </li>
                <li>beperking van de verwerking te verkrijgen (artikel 18);</li>
                <li>
                  de persoonsgegevens die je aan ons hebt verstrekt te ontvangen
                  in een gestructureerd, gangbaar en machineleesbaar formaat en
                  deze aan een andere verwerkingsverantwoordelijke over te
                  dragen (artikel 20);
                </li>
                <li>
                  op elk moment, om redenen die verband houden met je specifieke
                  situatie, bezwaar te maken tegen verwerking die op onze
                  gerechtvaardigde belangen berust (artikel 21); en
                </li>
                <li>
                  elke door jou gegeven toestemming op elk moment in te trekken,
                  zonder dat dit afbreuk doet aan de rechtmatigheid van de
                  verwerking vóór de intrekking (artikel 7, lid 3).
                </li>
              </UL>
              <P>
                Verzoeken kunnen op elk moment worden gericht aan{' '}
                <strong>plantative@gmail.com</strong>. Wij antwoorden zonder
                onnodige vertraging en in elk geval binnen één maand na
                ontvangst, welke termijn met twee maanden kan worden verlengd
                wanneer dit noodzakelijk is gelet op de complexiteit en het
                aantal verzoeken, in welk geval wij je van de verlenging en de
                redenen daarvoor op de hoogte brengen. Bij redelijke twijfel
                over je identiteit kunnen wij aanvullende informatie vragen die
                nodig is om deze te bevestigen. Verzoeken zijn kosteloos, met
                dien verstande dat wij een redelijke vergoeding kunnen
                aanrekenen of kunnen weigeren gevolg te geven aan een verzoek
                dat kennelijk ongegrond of buitensporig is, met name vanwege het
                repetitieve karakter ervan.
              </P>
              <P>
                Je kunt bepaalde verwerkingen ook rechtstreeks in de applicatie
                beheren: je kunt je profiel bewerken, je advertenties beheren of
                verwijderen, de zichtbaarheid van je adres aanpassen, je
                meldingsvoorkeuren beheren, andere gebruikers blokkeren, en
                locatie- en meldingstoestemmingen intrekken in je
                apparaatinstellingen.
              </P>
              <P>
                Je hebt het recht een klacht in te dienen bij een
                toezichthoudende autoriteit, met name in de lidstaat van je
                gewone verblijfplaats, je werkplek of de plaats van de beweerde
                inbreuk. De Belgische toezichthoudende autoriteit is de
                Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel,
                België, contact@apd-gba.be. Voor gebruikers in Nederland is dat
                de Autoriteit Persoonsgegevens, Postbus 93374, 2509 AJ Den Haag.
              </P>

              <H2>14. Diensten van derden</H2>
              <P>
                De Diensten kunnen links bevatten naar, of samenwerken met,
                websites, applicaties en diensten van derden, waaronder de
                hierboven vermelde identiteitsaanbieders en appwinkels. Die
                partijen verwerken persoonsgegevens onder hun eigen
                privacybeleid, waarover wij geen controle hebben. Wij doen geen
                uitspraak over, en aanvaarden voor zover wettelijk toegestaan
                geen aansprakelijkheid voor, de inhoud, praktijken of
                beschikbaarheid van dergelijke derden.
              </P>

              <H2>15. Wijzigingen in dit Beleid</H2>
              <P>
                Wij kunnen dit Beleid van tijd tot tijd aanpassen om wijzigingen
                in de Diensten, in onze verwerkingsactiviteiten of in de
                toepasselijke wetgeving te weerspiegelen. Bij een wezenlijke
                wijziging brengen wij je ten minste 30 dagen vóór de
                inwerkingtreding op de hoogte via de applicatie of per e-mail,
                en worden het versienummer en de datum bovenaan dit Beleid
                bijgewerkt. Wanneer een wijziging naar toepasselijk recht je
                toestemming vereist, vragen wij die toestemming voordat de
                betreffende verwerking aanvangt. Je voortgezet gebruik van de
                Diensten na de datum van inwerkingtreding van een wijziging
                geldt, voor zover wettelijk toegestaan, als aanvaarding van het
                gewijzigde Beleid.
              </P>

              <H2>16. Deelbaarheid en dwingend recht</H2>
              <P>
                Indien een bepaling van dit Beleid ongeldig, onwettig of
                niet-afdwingbaar wordt bevonden, wordt die bepaling gescheiden
                van de overige bepalingen, die onverkort van kracht blijven.
                Niets in dit Beleid strekt ertoe rechten uit te sluiten of te
                beperken die je toekomen op grond van dwingende bepalingen van
                toepasselijk recht die niet rechtsgeldig kunnen worden
                uitgesloten of beperkt, met inbegrip van je rechten onder de AVG
                en onder dwingend Belgisch consumentenrecht, en geen enkele
                uitsluiting of beperking van aansprakelijkheid in dit Beleid is
                van toepassing op aansprakelijkheid voor overlijden of
                lichamelijk letsel door nalatigheid, voor bedrog of bedrieglijke
                voorstelling van zaken, of op enige andere aansprakelijkheid die
                niet rechtsgeldig kan worden uitgesloten.
              </P>

              <H2>17. Toepasselijk recht</H2>
              <P>
                Dit Beleid wordt beheerst door Belgisch recht, onverminderd de
                dwingende bescherming die je geniet op grond van het recht van
                je land van gewone verblijfplaats en onverminderd je recht om
                een klacht in te dienen bij je lokale toezichthoudende
                autoriteit.
              </P>

              <H2>18. Contact</H2>
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
                Laatst bijgewerkt: 31 augustus 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyNL;
