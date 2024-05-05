### Digitalna Dalmacija JUNIORDev React 2024

# Završni projekt - Projektni zadatak

## Opis projekta

Cilj projekta je napraviti aplikaciju za volontiranje pomoću koje korisnici mogu vidjeti trenutne volonterske aktivnosti te pogledati popis volontera i udruga. Aplikacija će se sastojati od nekoliko pod-stranica

- Početna stranica
- Popis aktivnosti
- Popis volontera
- Popis volonterskih udruga

## Navigacija

Navigaciju možete implementirati na dva načina:

1. Korištenjem fiksnog izbornika i implementacijom svakog ekrana kao zasebne komponente (uvjetno renderiranje)
2. Korištenje biblioteke ["React Router"](https://reactrouter.com/en/main/start/tutorial) koja funkcionira na sličan način ali također pruža i dodatne mogućnosti pri navigaciji

## Baza podataka i poslužitelj

Za potrebe izrade aplikacije možete koristiti biblioteku "json-server" koju smo koristili na radionicama ili ako želite možete iskoristiti neku od cloud usluga koje nude funkcionalnost baze podataka i poslužitelja u jednom, kao što su ["Firebase"](https://firebase.google.com/) ili ["Supabase"](https://supabase.com/). Uz projekt će biti priložen jedan primjer kako mogu biti strukturirani podaci u "bazi" ali možete i sami napraviti vlastitu organizaciju podataka.

## Uloga korisnika

Aplikacija je zamišljena na način da sadrži različite funkcionalnosti ovisno o ulozi korisnika. Potrebno je implementirati dvije uloge - **"admin"** i **"korisnik/user"**. S obzirom da kroz tečaj nismo obradili funkcionalnost prijave (jer je uglavnom vezana uz backend) različite uloge implementirajte korištenjem jednostavnog "checkbox" elementa koji će biti prikazan na izborniku ili na zaglavlju stranice. Iskoristite mogućnost "useContext" hook-a kako bi mijenjali funkcionalnosti stranice ovisno o trenutnoj ulozi korisnika

## Početna stranica

Ova stranica je jednaka za obje uloge i sadrži opće podatke o stranici. Osim toga možete je iskoristiti kako bi napisali par rečenica o sebi.

Popis funkcionalnosti:

- Opis stranice
- Predstavljanje autora
- Kontakt forma, poveznica na vaš LinkedIn, Github ili neku društvenu mrežu

![Početna](https://github.com/anamarijapapic/JUNIORDev-React-Volunteeraj/assets/92815435/3c34ebdb-134f-4df6-95b4-713959f89b2c)

## Popis aktivnosti

Ova stranica prikazuje popis volonterskih aktivnosti u našoj okolici (županiji). Korisnici mogu vidjeti sve dostupne aktivnosti, pogledati detalje o pojedinoj aktivnosti te se prijaviti za sudjelovanje.

Popis funkcionalnosti:

- Prikaz svih trenutnih aktivnosti (u obliku tablice ili u obliku niza kartica/okvira) - aktivnosti možete poredati po vremenu dodavanja ili dodajte opciju sortiranja po nekom parametru (datum, grad ili slično). U osnovnom prikazu je dovoljno prikazati ime aktivnosti i datum/vrijeme održavanja.
- Prikaz detalja o pojedinoj aktivnosti. Odabirom jedne aktivnosti, otvara se nova stranica ili pop-up (modal) prozor u kojem će biti prikazani dodatni detalji pojedine aktivnosti - detaljni opis aktivnosti, udruga koja je organizirala aktivnost, lokacija (možete implementirati prikaz na karti) i popis sudionika.
- Na stranici/prozoru sa detaljnim opisom aktivnosti, potrebno je dozvoliti korisnicima prijavu na aktivnost. Implementirajte polja za unos imena i prezimena volontera te ih odmah dodajte na popis. Dodavanje novih aktivnosti - svi korisnici imaju opciju dodavanja novih aktivnosti u popis. Potrebno je samo popuniti sve potrebne podatke i nakon potvrde unosa, nova aktivnost se dodaje u popis aktivnosti. Po želji implementirajte različite provjere unosa.
- Uloga Administratora:
  - Uz postojeće funkcionalnosti koje su dostupne i običnim korisnicima, administratoru su vidljive i opcije za brisanje pojedinih korisnika iz popisa prijava te brisanje čitavog događaja.
  - Po želji možete implementirati i mogućnost uređivanja postojećih podataka (samo u ulozi admina)

![Aktivnosti](https://github.com/anamarijapapic/JUNIORDev-React-Volunteeraj/assets/92815435/3f5af3fe-1d56-43a9-9e34-aa423512f123)

## Volonteri

Ova stranica služi za prikaz volontera koji su dostupni za kontakt i koji žele pomagati u određenim aktivnostima. Volontere je moguće filtrirati po željenim parametrima, te je moguće dodavati nove volontere.

Popis funkcionalnosti:

- Prikaz volontera - na stranici su prikazani svi registrirani volonteri. Po želji oblikujte prikaz podataka - možete prikazati sve podatke pojedinog volontera u jednom okviru ili implementirajte modal prozor za detaljniji prikaz pojedinaca.
- Filtriranje volontera - dodajte mogućnost filtriranje volontera po željenom parametru kao što je grad ili vrsta posla. Korisnici bi trebali imati i opciju isključivanja filtera tj. prikaza svih podataka. Po želji možete implementirati i traku za pretraživanje (search bar) za lakši pronalazak volontera.
- Uloga administratora:
  - Dodavanje volontera - omogućite unos novih volontera na popis. Pri unosu je potrebno popuniti osobne podatke, grad u kojem se volonter nalazi (možete imati fiksnu listu gradova) te vrstu poslova koje volonter može obavljati (također može biti fiksno, uz generičku opciju "razno").
  - Brisanje volontera - opcija uklanjanja pojedinog volontera sa popisa
  - Uređivanje volontera - promjena postojećih podataka

Dodatne mogućnosti:

- Implementirajte mogućnost ocjenjivanja volontera. Uz svakog volontera dodajte mogućnost unosa ocjene (npr. 1-5) ili ocjenjivanja pomoću ikona zvjezdica. Na prikazu volontera dodajte brojač ocjena i prosječnu ocjenu.
- Možete implementirati i mogućnost ostavljanja komentara uz pojedinog volontera. Admin bi u tom slučaju trebao imati mogućnost brisanja komentara.
- Prilikom dodavanja volontera možete dodati mogućnost i dodavanja slike koja će se onda naravno koristiti i kod prikaza svih volontera. Umjesto uploada slika također možete koristiti neki od [besplatnih API](https://www.stefanjudis.com/blog/apis-to-generate-random-user-avatars/) za generiranje _avatara_ novih korisnika.

![Volonteri](https://github.com/anamarijapapic/JUNIORDev-React-Volunteeraj/assets/92815435/ab1e3da7-10ac-4c09-bb97-a61475c999ee)

## Udruge

Ova stranica služi za prikaz postojećih volonterskih udruga te za dodavanje novih.

Popis funkcionalnosti:

- Obični korisnici na stranici mogu vidjeti popis postojećih volonterskih udruga
  - Prikazuje se ime udruge, adresa i grad
  - Dodajte opciju sortiranja popisa po bilo kojem od ta tri podatka
  - Moguće je poslati zahtjev za prijavu nove udruge - potrebno je popuniti podatke na formi za unos. Nakon popunjavanja podataka korisniku će se ispisati poruka kako je zahtjev poslan administratoru i da će udruga biti dodana u popis nakon odobrenja.
- Uloga administratora
  - Administratorima je uz popis udruga na stranici vidljiv i dodani popis - zahtjevi za odobrenje (korisnici ne vide ovaj popis)
  - Na popisu za odobrenje admin vidi sve zahtjeve za nove udruge koje su korisnici poslali a koje još nisu obrađene
  - Administrator ima dvije mogućnosti - odobriti zahtjev pri čemu će se udruga izbrisati sa popisa zahtjeva i dodati u popis udruga koji je vidljiv korisnicima; odbaciti zahtjev nakon čega se udruga u potpunosti briše sa stranice.

![Udruge](https://github.com/anamarijapapic/JUNIORDev-React-Volunteeraj/assets/92815435/7809dc71-b1b7-4913-8f27-e5c566524a32)

## Predaja rješenja

Na početku rada inicijalizirajte **git** repozitorij unutar svog projekta te koristite njegove mogućnosti (stvaranje _commit_-a i grananje) tokom razvoja projekta. Otvorite udaljeni repozitorij na nekoj od web platformi (npr. Github) te postavite taj repozitorij kao javni (_public_). Poveznicu (_link_) tj. adresu repozitorija ćete zapisati na Edit Dalmacija portalu - među materijalima tečaja ćete pronaći i _link_ za upisivanje repozitorija.
