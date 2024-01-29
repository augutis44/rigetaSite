import { Typography } from "@mui/material";
import { SideBox, TitleTypography } from "../helpers/StyledBox";

const AboutBox = () => {

    return (
        <SideBox>

            <TitleTypography>
                Apie MB „Rigeta“
            </TitleTypography>

            <Typography paragraph sx={{
                textAlign: 'justify'
            }}>
                Įmonė veikia nuo 2016 metų. Mūsų paslaugas perka 35 įmonės , kurios yra
                iš įvairių pramonės šakų ir dydžių. Mes nerenkame savo klientų pagal
                teritorinius apribojimus, jų veikla apima visą Lietuvos teritoriją.
                <br />
                <br />
                Esame patyrusių, kvalifikuotų, atsakingų specialistų komanda, kuri įsipareigoja
                teikti aukšto lygio paslaugas savo klientams. Komandos darbuotojų patirtis
                apskaitos srityje nuo 1992 m. Mūsų ilgametė patirtis apskaitos srityje leidžia
                mums pasiūlyti individualizuotus sprendimus, pritaikytus kiekvienos įmonės poreikiams.
                <br />
                <br />
                MB „Rigeta“ specializuojasi organizuojant ir tvarkant įmonių ir įstaigų finansinę
                apskaitą. Taip pat teikiame konsultacijas bei pasiūlymus susijusius su buhalterine
                ir mokestine apskaita. Mūsų tikslas - padėti klientams pasiekti sėkmę jų verslo
                srityje ir užtikrinti sklandų finansinį valdymą.
                <br />
                <br />
                Mes įsipareigoję užtikrinti, kad mūsų klientai jaustųsi saugūs ir pasitikintys savo
                finansų tvarkymu, o mes stengiamės būti patikimu ir patyrusiu partneriu jų verslo sėkmei.
            </Typography>

        </SideBox>
    )
}

export default AboutBox;
