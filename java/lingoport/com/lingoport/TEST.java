public void copyAttsInVector(
      AMSDataObject foFrom,
      Vector        fvInclude,
      boolean       fboolOverwrite )
   {
      VSMetaQuery lvsmqFrom = foFrom.getMetaQueryNotStatic();
      VSMetaQuery lvsmqTo   = this  .getMetaQueryNotStatic();
      Data   loFromData;
      Data   loToData;
      //
      // Loop through each attribute in the vector.
      //
      if (AMS_DEBUG) System.err.println("copyAttsInVector:: Size of vector=" + fvInclude.size());
      for (int i = 0;i < fvInclude.size(); i++)
      {
         if (AMS_DEBUG) System.err.println("copyAttsInVector:: Copying elementAt(" + i + ") = " + (String)fvInclude.elementAt(i));
         String lsAttribute = (String)fvInclude.elementAt(i);
         //
         // If the attribute exists on both data objects, copy it.
         //
         if ((lvsmqFrom.getMetaColumn(lsAttribute) != null) &&
            (lvsmqTo.getMetaColumn(lsAttribute) != null))
         {
            loToData = this.getData(lsAttribute);
            if ((AMS_DEBUG) && (loToData.getColumnType()==3)) System.err.println("loToData= " + loToData.getBigDecimal());
            if ((AMS_DEBUG) && (loToData.getColumnType()==12)) System.err.println("loToData= " + loToData.getString());
            if ((AMS_DEBUG) && (loToData.getColumnType()==-7)) System.err.println("loToData= " + loToData.getboolean());
            if (AMS_DEBUG) System.err.println("foFrom.getData(lsAttribute).getObject()= " + foFrom.getData(lsAttribute).getObject());
            if((fboolOverwrite) ||
               //             ((loToData.getColumnType() == 3 /* Big Decimal */) && ((loToData.getBigDecimal() == null) || (loToData.getBigDecimal().compareTo(new BigDecimal("0")) == 0))) ||
               ((loToData.getColumnType() == 3 /* Big Decimal */) && (loToData.getBigDecimal() == null)) ||
                  (AMSStringUtil.strIsEmpty(loToData.getString())))
            {
               if (AMS_DEBUG) System.err.println("  Copying " + lsAttribute);
               loFromData = foFrom.getData(lsAttribute);
               //DID START temp workaround for updateRowImmediate()
               //loToData.setData(loFromData);
               loToData.setValue(loFromData.getValue());
               //DID END   temp workaround for updateRowImmediate()
               loToData.setInitialized(true);
            }
            else
            {
               if(AMS_DEBUG)
               {
                  System.err.println(" NOT COPYING !");
                  System.err.println("  " + lsAttribute + " Column Type= " + foFrom.getData(lsAttribute).getColumnType());
                  System.err.println("  " + lsAttribute + " Type Code= " + foFrom.getData(lsAttribute).getTypeCode());
                  System.err.println("  " + lsAttribute + " loToData.getString() = " + loToData.getString());
               }
            }
         }
         else
         {
            if(AMS_DEBUG) System.err.println("The attribute (" + lsAttribute + ") does not exist on both data objects.");
         }
      }
   }
