#!/bin/sh -e

cd `dirname $0`/public

mogrify -trim corners/top-left/*
mogrify -trim corners/top-right/*
mogrify -trim corners/bottom-left/*
mogrify -trim corners/bottom-right/*

mogrify -trim patterns/ART/*
