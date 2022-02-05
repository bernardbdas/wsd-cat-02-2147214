<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body style="text-align:center">
                <h2>Students registered for Gateways 2022</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Student Name</th>
                        <th>Student University</th>
                        <th>Phone no.</th>
                        <th>Email ID</th>
                    </tr>

                    <xsl:for-each select="christ/computer science">
                        <xsl:sort select="stu-name"/>
                        <tr>
                            <td>
                                <xsl:value-of select="stu-name"/>
                            </td>
                            <td>
                                <xsl:value-of select="stu-university"/>
                            </td>
                            <td>
                                <xsl:value-of select="stu-phone"/>
                            </td>
                            <td>
                                <xsl:value-of select="stu-email"/>
                            </td>
                        </tr>
                    </xsl:for-each>

                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>