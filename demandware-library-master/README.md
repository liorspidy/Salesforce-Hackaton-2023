Demandware library
==================

--------------------------

Introduction
------------
The Demandware library contains all shared code for various demandware community projects.

Documentation
-------------
Take a look at the wiki.

Support / Contributing
----------------------
Feel free to create isseus and enhancement requests or discuss on the existing ones.

Release History
---------------
- 2016/11/17 - [1.7.2](https://bitbucket.org/demandware/demandware-library/commits/tag/1.7.2)
    - compatibility fixes regarding custom feeds
- 2016/11/07 - [1.7.1](https://bitbucket.org/demandware/demandware-library/commits/tag/1.7.1)
    - stabilization and bug fixes
- 2016/03/07 - [1.7.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.7.0)
    - Migration to JavaScript Controller (JSC)
    - Filehammer file utility added (provided by Anatolij Obitskij)
- 2015/07/14 - [1.6.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.6.0)
    - General improvements
        - upgraded to fully support ExtJS5
        - SuperBoxSelect removed (replacement Ext.form.field.Tag)
        - CustomObjectStore.js and ObjectStore.js merged into one file
        - removed EXTJS4
        - obsolete EXTJS themes removed
        - famfamfam icons moved into CSS sprite
    - Utility enhancements (provided by Robert Pemsel)
        - LazyLogger Wrapper
        - Enhanced collection object
        - Martini – tool to mix objects into another
    - Matyroshka XML Parser Framework (provided by Robert Pemsel)
- 2015/02/09 - [1.5.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.5.0)
    - renamed ext_ressources folder to ext_resources
    - added ext5 support
    - license update
    - initial placeholder API support
- 2014/05/20 - [1.4.1](https://bitbucket.org/demandware/demandware-library/commits/tag/1.4.1)
    - More Features to VirtualFile added
    - libFileUtils works with increased performance
- 2014/04/22 - [1.4.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.4.0)
    - New api-like class VirtualFile making filehandling / remotefilehandling much easier (Files on FTP / Webdav feel like normal file)
    - Fixing dropdown stying after business manager rework
    - Utilities script contains more APIs 
- 2013/12/20 - [1.3.2](https://bitbucket.org/demandware/demandware-library/commits/tag/1.3.2)
    - EXT JS based object store: use key attribute as idField instead of UUID
    - EXT JS based object store: fixed TreeStore server-side handling 
    - EXT JS based object store: allow to set object store to localSort 
    - EXT JS based object store: ObjectHelper.toObject() now allows to return array to map one custom object to many records
    - EXT JS based object store: Using the store for products now uses dw search internally to allow filtering
- 2013/12/09 - [1.3.1](https://bitbucket.org/demandware/demandware-library/commits/tag/1.3.1)
    - Fixed generic object editor bug which prevented to create the first object
- 2013/11/04 - [1.3.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.3.0)
    - EXT JS based custom object UI: allow server side sorting and adding pagination
	- EXT JS based custom object store: enhanced code architecture to introduce UI specific service side classes
    - EXT JS based custom object store: added code documentary
	- EXT JS based custom object store: support for serviceframework tag 3.1.0 (https://bitbucket.org/demandware/service-framework/commits/tag/3.1.0)


- 2013/10/16 - [1.2.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.2.0)
    - added SyntaxHighlighter library for universal use
    - added common.js support to libInheritance
    - fixed issue with custom object store which did not properly save objects
- 2013/09/24 - [1.1.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.1.0)
    - implemented CRUD API for store and removed customer solution
    - updated generic grid to work with this solution
    - minor bugfixes
- 2013/08/27 - [1.0.0](https://bitbucket.org/demandware/demandware-library/commits/tag/1.0.0)
    -  Initital release

License
-------
    The Demandware library contains all shared code for various demandware community projects.
    Copyright (C) 2014  Demandware

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.